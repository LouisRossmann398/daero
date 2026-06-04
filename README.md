# DAERO GmbH – Website

Moderne Mehrseiten-Website für die **DAERO GmbH** (IT-Dienstleister im Raum München, Standort Petershausen). Gebaut mit **Next.js 16** (App Router), **TypeScript** und **Tailwind CSS v4**.

## Schnellstart

```bash
npm install
npm run dev
```

Die Seite läuft anschließend unter [http://localhost:3000](http://localhost:3000).

Weitere Skripte:

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server starten
npm run lint    # ESLint
```

## Projektstruktur

```
src/
├─ app/
│  ├─ layout.tsx                  # Root-Layout (Header, Footer, SEO-Metadaten)
│  ├─ page.tsx                    # Startseite
│  ├─ leistungen/
│  │  ├─ page.tsx                 # Übersicht aller Leistungen
│  │  └─ [slug]/page.tsx          # Detailseite je Leistung (statisch generiert)
│  ├─ ueber-uns/page.tsx          # Über uns / "Das sind wir"
│  ├─ kontakt/page.tsx            # Kontaktdaten (Formular folgt später)
│  ├─ impressum/page.tsx          # Impressum (Gerüst)
│  └─ datenschutz/page.tsx        # Datenschutz (Gerüst)
├─ components/                    # Header, Footer, ServiceCard, Icons, ...
└─ content/site.ts                # Zentrale Inhalte & Texte (Single Source of Truth)
```

## Inhalte pflegen

Sämtliche Texte (Firmendaten, Einleitung, Leistungen, "Das sind wir") liegen zentral in
[`src/content/site.ts`](src/content/site.ts). Änderungen an Texten oder das Hinzufügen einer
weiteren Leistung erfolgen ausschließlich dort – Übersicht, Detailseiten, Navigation und Footer
aktualisieren sich automatisch.

## Bilder ergänzen

Bilder können später in `public/` abgelegt und mit dem Next.js `<Image>`-Komponenten eingebunden
werden. Aktuell verwenden Hero- und "Das sind wir"-Bereich gestaltete Platzhalter, die sich leicht
durch echte Fotos ersetzen lassen.

## Noch offen (bewusst nicht enthalten)

- **Kontaktformular / Mailversand** – die Kontaktseite verweist aktuell auf Telefon und E-Mail.
  Ein Formular lässt sich später z. B. über einen Route Handler (`app/api/...`) ergänzen.
- **Rechtstexte** – Impressum und Datenschutz sind als Gerüst angelegt und müssen vor der
  Veröffentlichung rechtssicher vervollständigt werden.
