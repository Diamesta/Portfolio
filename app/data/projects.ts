export const projects = [
  {
    name: 'Portfolio Nébuleuse',
    logo: '/favicon.png',
    logoAlt: 'Logo du portfolio',
    description:
      'Mon portfolio personnel, conçu pour présenter mon parcours, mes compétences et mes réalisations dans une interface personnalisée.',
    technologies:
      'Nuxt · Vue.js · JavaScript · TypeScript · Tailwind CSS · Nuxt UI · Node.js',
    status: 'En ligne',
    statusColor: 'success' as const,
    order: 3,
    type: 'portfolio',
    previewTitle: 'KAYLEE CHAPON',
    previewIcon: 'i-lucide-sparkles',
    previewLabel: 'Bienvenue dans mon univers',
    previewName: 'Portfolio',
    previewAccent: 'Nébuleuse.',
    previewDescription:
      'Aperçu du portfolio terminé et accessible en ligne.'
  },
  {
    name: 'VeilleTech',
    logo: '/images/favicon_VeilleTech.png',
    logoAlt: 'Logo VeilleTech',
    description:
      'Un projet de veille technologique personnel, conçu pour me tenir à jour dans le cadre de ma formation de Technicienne Informatique de Proximité (TIP). VeilleTech sera également proposée sous forme d’application pour Android et iOS.',
    technologies:
      'Nuxt · Vue · TypeScript · Nuxt UI · Tailwind CSS · NestJS · SQLite avec TypeORM · RSS Parser · Node.js · REST',
    status: 'En développement',
    statusColor: 'info' as const,
    order: 2,
    type: 'veilleTech',
    previewTitle: 'VEILLETECH',
    previewIcon: 'i-lucide-radar',
    previewDescription:
      'Suivre les évolutions des technologies informatiques.',
    previewItems: ['Réseaux', 'Systèmes', 'Cybersécurité']
  },
  {
    name: 'PatchWatch',
    logo: '/images/favicon_PatchWatch.png',
    logoAlt: 'Logo PatchWatch',
    description:
      'Un projet autour du suivi des mises à jour et de la maintenance informatique, dont l\'interface est en cours de conception.',
    technologies:
      'Nuxt · Vue · TypeScript · Nuxt UI · Tailwind CSS · Vite · NestJS · REST · TypeORM · SQLite · PostgreSQL · Tauri · Rust · RSS',
    status: 'En conception',
    statusColor: 'info' as const,
    type: 'patchWatch'
  }
]
