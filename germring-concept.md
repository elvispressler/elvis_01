# Konzept: germring.de - Klima & Statistik für Germering

## 1. Zielgruppe & Kernfunktion
- **Bürger/Hausbesitzer:** Suchen verlässliche, hyper-lokale Daten (Klima, Temperaturen, Sonnenstunden, Extremwetter) für Entscheidungen (z.B. Wärmepumpe, Solar, Dämmung).
- **Gewerbe (Handwerker, Energieberater):** Zielgruppe für die Monetarisierung (Miete von Werbeflächen/Sponsoring im thematisch passenden Umfeld).

## 2. Der "Trust-Faktor" (Design & UX)
Wie du richtig sagst: Eine faktenbasierte Seite muss durch absolutes Premium-Design Vertrauen aufbauen.
- **Seriosität durch Klarheit:** Kein verspieltes Cyberpunk wie im Portfolio. Stattdessen: Viel Weißraum, klare Typografie (z.B. Inter oder Roboto), gedeckte, "seriöse" Farben (Dunkelblau, Schiefergrau, eventuell ein ökologisches, aber modernes Grün als Akzent).
- **Datenvisualisierung:** Komplexe Daten müssen sofort verständlich sein. Hochwertige, interaktive Diagramme (z.B. mit Recharts oder Chart.js), die flüssig laden. Keine trockenen Excel-Tabellen.
- **Behörden-nahe Ästhetik (aber modern):** Es muss fast so aussehen, als könnte es eine offizielle, hochmoderne Seite der Stadt sein (ohne rechtlich als solche aufzutreten).

## 3. Informationsarchitektur (MVP)
1. **Hero-Sektion:** Starkes lokales Bild (Germering) kombiniert mit einer klaren Aussage (z.B. "Die Klimadaten für Ihre Energieentscheidung in Germering.").
2. **Aktuelle Lage & Historie:** Interaktive Graphen (Temperaturverlauf der letzten 20 Jahre, Niederschlagsmengen).
3. **Zukunftsprojektionen:** Was bedeuten die Modelle für Germering (Kühllast im Sommer, Heizlast im Winter).
4. **Partner-Sektion (Monetarisierung):** Hochwertig integrierte Boxen wie "Lokale Experten für Ihre Energiewende", die nicht wie billige Bannerwerbung aussehen, sondern wie empfohlene Premium-Partner.

## 4. Technische Umsetzung
- Wir bleiben beim bewährten Stack: React, Vite, Tailwind CSS.
- Für die Mockup-Phase bauen wir real aussehende, aber zunächst statische Diagramme.
- Später (wenn du Backend brauchst), können wir echte Wetter-APIs oder Open-Data der Behörden anbinden.
