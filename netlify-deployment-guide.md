# Deployment Guide: Replit -> GitHub -> Netlify

Hier ist die Schritt-für-Schritt Anleitung, wie du dein Replit Projekt auf Netlify veröffentlichst und deine Domain `elvispressler.de` verknüpfst.

## Schritt 1: Code von Replit zu GitHub bringen

Da du dich aktuell in Replit befindest, ist der einfachste Weg, dein Projekt direkt mit GitHub zu verbinden.

1. Schau in Replit auf die linke Seitenleiste. Dort findest du ein Icon für **Git** (oft ein Symbol mit Punkten und Linien, die sich verzweigen).
2. Klicke darauf. Wenn du noch nicht mit GitHub verbunden bist, fragt Replit dich, ob du dich anmelden möchtest.
3. Wähle **"Create a Git Repository"** oder **"Connect to GitHub"**.
4. Gib dem Repository einen Namen (z.B. `erich-portfolio`).
5. Stelle sicher, dass du es auf **Public** oder **Private** setzt (beides funktioniert für Netlify, Private ist besser, wenn du den Code nicht teilen willst).
6. Klicke auf **Create Repository** / **Push to GitHub**. 
*(Replit lädt nun deinen gesamten Code hoch).*

## Schritt 2: Netlify mit GitHub verknüpfen

Da du dir bereits einen Account bei Netlify erstellt hast:

1. Gehe in dein Netlify Dashboard.
2. Klicke auf den Button **"Add new site"** und wähle **"Import an existing project"**.
3. Wähle **GitHub** als Anbieter aus. (Du musst Netlify kurz autorisieren, auf deine Repos zuzugreifen).
4. Wähle dein neu erstelltes Repository (`erich-portfolio`) aus der Liste aus.

## Schritt 3: Die Build-Einstellungen (WICHTIG!)

Netlify versucht meistens, die Einstellungen selbst zu erraten, aber prüfe kurz, ob folgendes eingetragen ist:

* **Base directory:** `(leer lassen)`
* **Build command:** `npm run build`
* **Publish directory:** `dist/public` *(Das ist wichtig, weil unser Vite-Setup die fertigen Dateien in diesen Ordner legt!)*

Klicke auf **"Deploy site"**. Netlify baut nun deine Seite. Das dauert ca. 1-2 Minuten. Danach bekommst du eine URL wie `https://lustrous-unicorn-12345.netlify.app`. 
Klick drauf – deine Seite ist live!

## Schritt 4: Deine Domain (elvispressler.de) verknüpfen

Jetzt verbinden wir deine Hetzner-Domain mit der Netlify-Seite.

1. Klicke in Netlify auf **"Domain management"** oder **"Set up a custom domain"**.
2. Gib `elvispressler.de` ein und klicke auf "Verify". Netlify sagt dir, dass die Domain bereits registriert ist. Klicke auf "Add domain".
3. Netlify zeigt dir nun an, welche DNS-Einträge du setzen musst.
4. Logge dich parallel bei **Hetzner (DNS Console)** ein und wähle deine Domain.
5. Setze dort die Einträge, die Netlify verlangt. Normalerweise sind das:
   * Ein **A-Record** für `@` (bzw. leer), der auf die IP von Netlify zeigt (z.B. `104.198.14.52`).
   * Ein **CNAME-Record** für `www`, der auf deine Netlify-URL zeigt (z.B. `lustrous-unicorn-12345.netlify.app`).
6. Klicke in Netlify auf **"Verify DNS configuration"**. 

*Hinweis: DNS-Änderungen können bis zu 24 Stunden dauern, oft geht es aber innerhalb von 15 Minuten. Netlify kümmert sich danach automatisch und kostenlos um das SSL/HTTPS-Zertifikat!*
