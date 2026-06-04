export const company = {
  name: "DAERO GmbH",
  tagline: "Ihr IT-Dienstleister im Raum München",
  location: "Petershausen",
  address: {
    street: "Fraunhoferring 4b",
    zip: "85238",
    city: "Petershausen",
  },
  hours: [
    { days: "Mo – Do", time: "9:00 – 17:00" },
    { days: "Fr", time: "9:00 – 14:00" },
  ],
  phone: "08137 / 996 2273",
  phoneHref: "tel:+4981379962273",
  email: "info@daero.de",
} as const;

export const intro = {
  heading: "DAERO – Ihr IT-Dienstleister im Raum München",
  lead: "Suchen Sie einen Fachexperten für Engineering, Entwicklung und Vertrieb innovativer und kundenspezifischer Datenbank- und Softwaresysteme? Der Ihr mittelständisches Unternehmen auch durch Automatisierung von Geschäftsprozessen, Web-Applikationen, Cloud-Lösungen und Datenmanagement unterstützt und nachhaltig optimiert? Dann sind Sie bei der DAERO GmbH genau richtig.",
  paragraphs: [
    "Wir bieten Ihnen eine passgenaue IT-Lösung, die speziell für Ihr Unternehmen von unseren hochqualifizierten Fachexperten entwickelt wird.",
    "Hierfür betrachten wir Ihr bisheriges IT-System aus einer ganzheitlichen Perspektive – daraufhin bringen wir Hardware, Software, Infrastruktur und sämtliche Technologien in Einklang. Nur so kann eine stetige Optimierung Ihres Unternehmens und ein langfristig erfolgreiches Konstrukt gewährleistet werden.",
    "Um die individuellen, branchenspezifischen Wünsche umsetzen zu können, erarbeitet die DAERO GmbH gemeinsam mit Ihnen eine optimal passende IT-Lösung.",
    "Profitieren Sie von unserer Fachexpertise: Wir beraten Sie und Ihr mittelständisches Unternehmen ganzheitlich. Vor allem durch die Spezialisierung im Bereich Maschinenbau und Wirtschaftsinformatik richtet sich die DAERO GmbH an mittelständische Unternehmen in der handwerklich oder industriell geprägten Wirtschaftsbranche. Neben der Entwicklung von kundenspezifischen Datenbanken, Software und Web-Applikationen unterstützen wir Sie durch kompetente und lösungsorientierte Beratung sowie durch monatlichen IT-Support mit Hosting und Backup-Service an unserem Standort in Petershausen.",
    "Mit digitaler Produktentwicklung der DAERO GmbH in ein Zeitalter des unternehmerischen Erfolges.",
  ],
} as const;

export const about = {
  heading: "Das sind wir",
  paragraphs: [
    "Mit dem Rundum-Sorglos-Angebot der DAERO GmbH ist Ihr unternehmerischer Erfolg garantiert. Wir entwickeln und programmieren für Sie maßgeschneiderte, datenbankbasierte Software und kümmern uns um das Hosting der eingesetzten Technologie sowie um Ihre Unternehmensdaten.",
    "Datenschutz und Datensicherheit stehen bei der DAERO GmbH an erster Stelle!",
  ],
  highlights: [
    "Spezialisiert auf Maschinenbau & Wirtschaftsinformatik",
    "Maßgeschneiderte, datenbankbasierte Individualsoftware",
    "Hosting & Backup-Service am Standort Petershausen",
    "Ganzheitliche Beratung als zentraler Ansprechpartner",
  ],
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  /** Long-form content, one entry per paragraph */
  paragraphs: string[];
};

export const services: Service[] = [
  {
    slug: "datenbankentwicklung",
    title: "Datenbankentwicklung",
    short:
      "Wir betreuen, optimieren und entwickeln Ihre Datenbanksysteme – von Datensicherheit bis Performance.",
    paragraphs: [
      "Oftmals bringt schon der einfache Betrieb und die Nutzung der bereits vorhandenen Firmensoftware und Datenbanksysteme Herausforderungen mit sich. Dank unserer Fachexperten können Sie beruhigt in eine reibungslose Zukunft blicken.",
      "Die DAERO GmbH kümmert sich um Ihr bestehendes Datenbanksystem – von der Datensicherheit bis hin zur Performance. Sollten Sie jedoch eine komplett neue Software benötigen, programmieren wir Ihre maßgeschneiderte Datenbank. In dieser werden die Daten Ihres Unternehmens effizient und zuverlässig gespeichert.",
      "Darüber hinaus können diese Daten in andere Datenquellen integriert werden, um manuelle Eingaben durch Mitarbeiter zu vermeiden. Behalten Sie stets den Überblick und die Kontrolle über sämtliche unternehmensrelevante Daten!",
    ],
  },
  {
    slug: "softwareentwicklung",
    title: "Softwareentwicklung",
    short:
      "Wir planen, analysieren, entwickeln und implementieren Ihre maßgeschneiderte Business-Software.",
    paragraphs: [
      "Sie suchen eine passgenaue Software für Ihr Unternehmen? Dann sind Sie bei der DAERO GmbH genau richtig: Wir planen, analysieren, entwickeln und implementieren Ihre maßgeschneiderte Business-Software.",
      "Vor allem die Entwicklung datenbankbasierter Individualsoftware ist einer der Kernbereiche und Haupttätigkeitsbereiche der DAERO GmbH – lassen Sie sich von unseren wertvollen Erfahrungen und umfangreichem Know-how überzeugen! Basierend auf diversen Microsoft-Technologien und einem speziell von der DAERO GmbH entwickelten Baukastensystem generieren wir Ihre neue Individualsoftware.",
      "Die DAERO GmbH bietet Ihrem mittelständischen Unternehmen qualifizierte Fachexpertise, smarte Technologien, zielgerichtete Entwicklungsprozesse und erfolgreiche IT-Lösungen. Sagen Sie Ade zu unpassender Standardsoftware.",
    ],
  },
  {
    slug: "geschaeftsprozessautomatisierung",
    title: "Geschäftsprozessautomatisierung",
    short:
      "Wir erkennen Ihre Unternehmensbedürfnisse und setzen sie in bestehenden oder neuen Geschäftssystemen um.",
    paragraphs: [
      "Unsere Fachexperten erweitern stets ihre Kenntnisse in diversen Unternehmensbranchen. Dank unserer Spezialisierung im Bereich Maschinenbau und Wirtschaftsinformatik können wir ein breites Spektrum an technologischen und handwerklichen Unternehmen im Mittelstand analysieren und beraten.",
      "Die DAERO GmbH erkennt Ihre Unternehmensbedürfnisse und setzt diese erfolgreich in bereits bestehenden oder neuen Geschäftssystemen um.",
    ],
  },
  {
    slug: "cloud-loesungen",
    title: "Cloud-Lösungen",
    short:
      "Von Datensynchronisation über ortsunabhängigen Zugriff bis zu hybriden Strukturen – sicher in die Cloud.",
    paragraphs: [
      "Die Cloud bietet zahlreiche relevante Funktionen für Ihr Unternehmen. Von der Datensynchronisation auf verschiedenen Geräten, dem unkomplizierten Zugriff auf sämtliche Informationen, dem nahezu unendlichen Speicherplatz über gemeinsames Arbeiten an unterschiedlichen Dateien bis hin zu hybriden Strukturen – die Cloud sprengt unternehmerische Domänengrenzen.",
      "Dennoch ist es an dieser Stelle von sehr großer Bedeutung, über die Risiken und Gefahren des Cloud-Computing aufgeklärt zu werden. Für die DAERO GmbH stehen der Schutz und die Sicherheit von sensiblen Daten an oberster Stelle – wir begleiten Sie in ein sicheres Zeitalter des technologischen Cloud-Erfolges.",
    ],
  },
  {
    slug: "datenmanagement",
    title: "Datenmanagement & Datensicherungsservice",
    short:
      "Aufbau und effiziente Nutzung Ihres Datenmanagements – inklusive individueller Backups am Standort Petershausen.",
    paragraphs: [
      "Für einen reibungslosen Betrieb eines Unternehmens sind Daten von essenzieller Bedeutung. Hier liegt aber auch zugleich die Herausforderung, denn es gilt die vorhandenen oder übermittelten Daten richtig zu verstehen, um die relevanten Informationen selektieren zu können. Aufgrund der immer stärker vernetzten globalen Wirtschaft ist ein korrekt angewandtes Datenmanagement von sehr großer Bedeutung.",
      "Die DAERO GmbH hilft Ihnen bei dem Aufbau und der effizienten Nutzung eines Datenmanagement-Systems, um sämtliche Daten praktikabel für Ihr Unternehmensnetzwerk nutzen zu können.",
      "Neben dem Management Ihrer sensiblen Daten ist auch deren Sicherheit von oberster Priorität. Damit Ihre Unternehmensdaten jederzeit geschützt sind, erstellt die DAERO GmbH individuelle Backups. Unser Datensicherungsservice erfolgt mit persönlicher Überwachung an unserem Standort in Petershausen. Besonders wichtige Daten werden dabei mehrfach abgesichert. Schützen Sie sich und Ihr Unternehmen vor dem Datenverlust mit dem monatlichen Backup-Service der DAERO GmbH.",
    ],
  },
  {
    slug: "beratung",
    title: "Beratung",
    short:
      "Wir analysieren Ihre IT-Strukturen und entwickeln eine maßgeschneiderte IT-Infrastruktur als zentraler Ansprechpartner.",
    paragraphs: [
      "Vertrauen Sie auf die technologische Expertise der DAERO GmbH, denn unternehmerischer und wirtschaftlicher Erfolg benötigt dynamische Strukturen und Prozesse, die sich jederzeit an die sich ständig verändernden Marktanforderungen anpassen.",
      "Um Ihr mittelständisches Unternehmen zu optimieren, analysieren wir gemeinsam mit Ihnen die bestehenden IT-Strukturen. Daraufhin entwickeln wir eine für Ihr Unternehmen maßgeschneiderte IT-Infrastruktur.",
      "Die DAERO GmbH koordiniert und optimiert Ihr IT-Gesamtsystem als zentraler Ansprechpartner!",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services shown in the header dropdown (matches the original navigation) */
export const navServiceSlugs = [
  "datenbankentwicklung",
  "softwareentwicklung",
  "geschaeftsprozessautomatisierung",
] as const;
