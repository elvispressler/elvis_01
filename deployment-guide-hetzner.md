# Deployment Guide: elvispressler.de auf Hetzner

Da du bereits im IT-Umfeld arbeitest (und K8s/Docker Erfahrung hast), halten wir die Anleitung pragmatisch und technisch sauber.

Es gibt zwei Wege, dieses Portfolio zu betreiben. Da du erwähnt hast, dass ihr eventuell einen Kubernetes-Cluster zur Verfügung habt, beschreibe ich beide Szenarien.

---

## Option A: Deployment im bestehenden Kubernetes Cluster (Empfohlen, falls K8s extern erreichbar)

Wenn euer K8s-Cluster Traffic von außen zulässt (Ingress Controller ist konfiguriert) und du dort Workloads betreiben darfst, ist dies der eleganteste Weg.

### 1. Image bauen und pushen
Da dein K8s-Cluster ein Image pullen muss, musst du das Docker Image bauen und in eine Registry (z.B. Docker Hub, GitHub Container Registry oder eure private Firmen-Registry) pushen.

```bash
# Im lokalen Projektverzeichnis ausführen:
docker build -t dein_registry_username/erich-portfolio:latest .
docker push dein_registry_username/erich-portfolio:latest
```

### 2. K8s Manifeste erstellen (deployment.yaml)
Erstelle ein Manifest für dein Deployment und den zugehörigen Service.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-deployment
  labels:
    app: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: dein_registry_username/erich-portfolio:latest
        ports:
        - containerPort: 5000
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
    - protocol: TCP
      port: 80
      targetPort: 5000
```

### 3. Ingress Route erstellen (ingress.yaml)
Damit `elvispressler.de` auf deinen Service geroutet wird. (Angenommen, ihr nutzt nginx-ingress und cert-manager für SSL).

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: portfolio-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - elvispressler.de
    - www.elvispressler.de
    secretName: portfolio-tls
  rules:
  - host: elvispressler.de
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: portfolio-service
            port:
              number: 80
```

### 4. DNS bei Hetzner anpassen
Logge dich in die Hetzner DNS Console ein und setze den A-Record für `elvispressler.de` (und `www`) auf die externe IP eures Kubernetes Ingress Controllers.

### 5. Anwenden
```bash
kubectl apply -f deployment.yaml
kubectl apply -f ingress.yaml
```

---

## Option B: Deployment auf einem eigenständigen Hetzner Cloud Server (VPS)

Falls der K8s Cluster rein intern ist oder du es lieber komplett getrennt betreiben möchtest.

### 1. Server & DNS vorbereiten
1. Miete einen **Hetzner Cloud CX22** (Ubuntu 24.04).
2. Notiere dir die IPv4-Adresse des Servers.
3. Gehe in die Hetzner DNS Verwaltung für `elvispressler.de`.
4. Erstelle zwei **A-Records**:
   - Host: `@` (oder leer) -> Ziel: `[Deine Server IP]`
   - Host: `www` -> Ziel: `[Deine Server IP]`

### 2. Server einrichten
Verbinde dich per SSH: `ssh root@[Deine Server IP]`

Installiere Docker und Docker Compose:
```bash
apt update && apt upgrade -y
apt install docker.io docker-compose-v2 git -y
```

### 3. Code auf den Server bringen
Wenn du das Projekt auf GitHub hast, clone es einfach:
```bash
git clone https://github.com/dein_username/dein_repo.git portfolio
cd portfolio
```

*(Alternativ kannst du den Code per `scp` oder `rsync` von deinem lokalen Rechner auf den Server kopieren).*

### 4. docker-compose.yml erstellen
Um SSL automatisch abzuhandeln, nutzen wir `Traefik` als Reverse Proxy. Erstelle eine Datei namens `docker-compose.yml` im Projektordner:

```yaml
version: '3.8'

services:
  traefik:
    image: traefik:v2.10
    command:
      - "--api.insecure=false"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=erich.florow@gmail.com" # WICHTIG: Deine Email
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"

  portfolio:
    build: .
    restart: always
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`elvispressler.de`, `www.elvispressler.de`)"
      - "traefik.http.routers.portfolio.entrypoints=websecure"
      - "traefik.http.routers.portfolio.tls.certresolver=myresolver"
      # Automatischer Redirect von HTTP auf HTTPS
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
      - "traefik.http.routers.portfolio-http.rule=Host(`elvispressler.de`, `www.elvispressler.de`)"
      - "traefik.http.routers.portfolio-http.entrypoints=web"
      - "traefik.http.routers.portfolio-http.middlewares=redirect-to-https"
```

### 5. Starten
Führe den Build und Start aus:
```bash
docker compose up -d --build
```

**Was jetzt passiert:**
1. Docker baut das Image aus deinem Code.
2. Traefik und dein Portfolio starten.
3. Traefik bemerkt die Domain `elvispressler.de`, fragt automatisch bei Let's Encrypt ein SSL-Zertifikat an und leitet den Traffic verschlüsselt an deinen Port 5000 weiter.

Fertig. Deine Seite ist unter `https://elvispressler.de` erreichbar.
