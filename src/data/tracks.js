// Role-focused landing pages. Each track reuses the shared JSON data
// (projects.json, employment.json, skills.json) and only decides what to
// feature and how to frame it. Project names, job titles, and skill category
// names must match those files exactly.

export const tracks = [
  {
    slug: 'engineering',
    navLabel: 'Software & AI Engineering',
    doorLabel: 'Software & AI',
    doorBlurb: 'Full-stack web apps, AI-powered tools, and the code behind them.',
    pageTitle: 'Elliot Gong - Software & AI Engineering',
    headline: 'Software engineer building full-stack and AI-powered apps',
    tagline:
      "M.S. Computer Science student at Cal State LA (Class of 2027) with a B.S. in Game Design & Development from RIT.",
    objective:
      'Seeking early-career software engineering roles, starting June 2027, building web applications, developer tools, and AI-assisted products.',
    featuredProjects: [
      'Satellite Launch Vehicle & Rideshare Configurator',
      'Soundstack',
      'Elasticsearch Aggregations Demo',
      'Netflix Clone',
    ],
    moreCategories: ['ai', 'web-apps', 'games'],
    experience: [
      'Intern Program Supervisor',
      'Computer Science (IT) Intern',
      'Game Development/Coding Instructor',
      'Web Developer Intern',
    ],
    skills: ['Languages', 'Web, Backend & DevOps', 'AI & Data'],
    contacts: ['github', 'email', 'linkedin'],
  },
  {
    slug: 'it',
    navLabel: 'IT & Systems',
    doorLabel: 'IT & Systems',
    doorBlurb: 'Infrastructure, Microsoft 365, user support, and automation.',
    pageTitle: 'Elliot Gong - IT & Systems',
    headline: 'IT and systems specialist with an automation mindset',
    tagline:
      'Most recently supervised the IT intern program at Copy Solutions, Inc., after being promoted from IT intern.',
    objective:
      'Seeking IT support, systems, and technical analyst roles where I can keep infrastructure running, support users, and automate repetitive work.',
    featuredProjects: [
      'Infrastructure Consolidation',
      'Internal CRM Assistant',
      'Microsoft 365 Administration & Support',
      'Sales Workstation Upgrade Assessment',
    ],
    moreCategories: ['it', 'ai'],
    experience: [
      'Intern Program Supervisor',
      'Computer Science (IT) Intern',
      'Game Development/Coding Instructor',
      'Dining Services Associate',
    ],
    skills: ['IT & Systems', 'AI & Data', 'Web, Backend & DevOps'],
    contacts: ['linkedin', 'email', 'github'],
  },
  {
    slug: 'creative',
    navLabel: 'Games, 3D & UX',
    doorLabel: 'Games, 3D & UX',
    doorBlurb: '3D characters and props, game levels, and UX design.',
    pageTitle: 'Elliot Gong - Games, 3D & UX',
    headline: 'Game designer and 3D artist who can also write the code behind it',
    tagline:
      'B.S. in Game Design & Development from RIT (Summa Cum Laude), now completing an M.S. in Computer Science.',
    objective:
      'Seeking game production, 3D/technical art, and UX roles that reward both an artist’s eye and an engineer’s follow-through.',
    featuredProjects: [
      'Fantasy Kaijus',
      'Weapons of Warhammer',
      'Half-Life 2: Combine Prison Escape',
      'Bakery Delivery App & Website',
    ],
    moreCategories: ['3D', 'games', 'ux'],
    experience: [
      '3D Artist (Volunteer)',
      'Game Development/Coding Instructor',
      'Web Developer Intern',
      '3D Modeling & Animation Intern, Freelance 3D Artist',
    ],
    skills: ['3D, Games & UX', 'Languages', 'AI & Data'],
    contacts: ['artstation', 'sketchfab', 'figma', 'linkedin', 'email'],
  },
];

export const getTrackBySlug = (slug) => tracks.find((track) => track.slug === slug);
