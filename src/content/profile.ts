// Single source of truth for the site and the /resume page.
// NOTE: this is public. Keep internal ticket IDs, internal service names,
// internal links (Confluence/Datadog/Jira) and incident details out of here.

export const profile = {
  name: "S Swaroop Bharadwaj",
  shortName: "Swaroop",
  role: "Software Engineer · Full-Stack",
  location: "Bengaluru, India",
  email: "ssbharadwaj2001@gmail.com",
  links: {
    github: "https://github.com/swaroopb2001",
    linkedin: "https://www.linkedin.com/in/swaroop-bharadwaj-0340b6203/",
  },
  tagline:
    "I build fast, reliable product surfaces and the backend systems behind them — currently on the care-team platform at Hinge Health.",
  about: [
    "I'm a full-stack engineer at Hinge Health, where I've worked across four teams since joining as an intern in 2023 — from event infrastructure and GraphQL caching to the Next.js App Router platform that powers CareHub 2.0.",
    "I like owning problems end to end: digging through a production memory leak, designing a backend system from the data model up, or laying the design-system foundation other engineers build on.",
    "Before industry, I did applied ML research at BMS College of Engineering — EEG signal processing, and a multimodal advertisement-video dataset that became a Springer publication.",
  ],
};

export type Highlight = { title: string; points: string[]; tags: string[] };

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: Highlight[];
};

export const experience: Role[] = [
  {
    company: "Hinge Health",
    title: "Software Engineer",
    period: "Jul 2024 — Present",
    location: "Bengaluru",
    summary:
      "Full-stack engineer on CareHub, the platform Hinge Health's coaches, physical therapists and onboarding specialists use to care for members. Worked across Member Record, Workflows, Care Interactions and Operational Excellence teams.",
    highlights: [
      {
        title: "Production stability & observability",
        points: [
          "Led remediation of out-of-memory crashes and intermittent 503s after the CareHub 2.0 scale-up, tracing root causes across auth, GraphQL and React Server Components.",
          "Stopped large error objects crossing the server–client boundary, taking error-driven memory spikes from ~70–150 MB to negligible.",
          "Trimmed error logging to actionable metadata (~34 KB → 3–4 KB per error) and fixed an Apollo Client config shipping dev-mode behaviour to production — ~40% less log volume overall.",
        ],
        tags: ["Next.js", "RSC", "Apollo", "Datadog", "Sentry"],
      },
      {
        title: "Performance",
        points: [
          "Traced 40–60 s member-page stalls during RSC rendering to a slow-failing auth guard in a downstream GraphQL service; coordinated a fast-path fix that brought loads from ~60 s to ~4–5 s.",
          "Proposed and drove route prefetching for viewport-visible members, cutting navigation time by ~1.5–2 s and removing click lag.",
        ],
        tags: ["Next.js", "GraphQL", "Prefetching"],
      },
      {
        title: "CareHub 2.0 platform & design system",
        points: [
          "Translated Figma design tokens (colour, spacing, typography) into a scalable CSS-variable theming layer and a font-based icon system, plus core components — now used across every CareHub 2.0 feature.",
          "Set up runtime configuration for the Next.js App Router via Docker + Helm, solved Apollo Client for server and browser, and wired in Sentry, Datadog and Apollo DevTools.",
          "Supported the Tailwind and Next.js upgrades; authored the design-system and platform docs.",
        ],
        tags: ["Next.js App Router", "Tailwind", "Design tokens", "Docker", "Helm"],
      },
      {
        title: "Backend systems",
        points: [
          "Designed and delivered member Snooze end to end — data model, lifecycle rules, role-based behaviour and suppression in the prioritisation engine — with indexed, low-latency queries and domain events for downstream consumers.",
          "Led backend and workflow design for computer-vision movement assessments: a workflow state machine and rule-based next-best-action logic surfacing clinically meaningful range-of-motion and pain regressions to PTs, with Kafka snapshot events persisted to Aurora.",
          "Led the Weekly Goals backend migration — goal-specific APIs decoupled from legacy flows, goal lifecycle and caching strategy as a single source of truth.",
        ],
        tags: ["NestJS", "TypeScript", "Kafka", "PostgreSQL", "System design"],
      },
      {
        title: "Product features",
        points: [
          "Built Member Notes end to end on the frontend, including an autosave architecture (debounce, idle triggers, persisted drafts), analytics and error boundaries.",
          "Built Member Alerts create/update/delete flows with validation and analytics.",
          "Led the frontend for onboarding specialists' move into CareHub: six new workflows, SMS messaging for the new role, a multi-step Transfer-to-Coach flow, and a batched AI smart-summary task — helping retire a legacy tool.",
        ],
        tags: ["React", "TypeScript", "GraphQL", "AI"],
      },
      {
        title: "Event infrastructure & caching",
        points: [
          "Migrated 64 events across three services from RabbitMQ to Kafka with flag-gated cutovers across dev, stage and prod; re-engineered real-time socket handling to remove duplicate events.",
          "Tuned Apollo cache policies and cache redirects, and added Kafka event-driven cache invalidation for task and workflow lifecycle events.",
        ],
        tags: ["Kafka", "RabbitMQ", "Socket.IO", "Apollo Client"],
      },
    ],
  },
  {
    company: "Hinge Health",
    title: "Software Engineering Intern",
    period: "Aug 2023 — Jun 2024",
    location: "Bengaluru",
    summary:
      "Rotated through Developer Experience, Member Record and Workflows teams before converting to full time.",
    highlights: [
      {
        title: "Highlights",
        points: [
          "Contributed to the internal developer portal (Backstage) to streamline developer environments.",
          "Built Member Record UI including the care-team details table and health-log / pain-data views.",
          "Kicked off the RabbitMQ → Kafka migration work carried into my full-time role.",
        ],
        tags: ["NestJS", "Node.js", "React", "Backstage"],
      },
    ],
  },
  {
    company: "BMS College of Engineering",
    title: "Research Intern",
    period: "Nov 2021 — 2023",
    location: "Bengaluru",
    summary:
      "Analytics team on the VGST-funded project “Infrastructural Development for Neurological Disorder using Brain Signal Computing”.",
    highlights: [
      {
        title: "Highlights",
        points: [
          "Preprocessed EEG signals in MATLAB and automated the pipeline with a reusable script.",
          "Ran the pipeline on collected data and analysed it with a range of ML algorithms.",
        ],
        tags: ["MATLAB", "Python", "Machine learning"],
      },
    ],
  },
];

export const awards = [
  "Manager Spot Award — RabbitMQ → Kafka migration",
  "Engineering award — onboarding specialists to CareHub",
];

export const publications = [
  {
    title:
      "ADGen: A Multimodal Advertisement Generation Dataset and Video Captioning Framework",
    authors:
      "Y. P. Pragathi, S. Swaroop Bharadwaj, P. Kolli, S. Sanjith, K. Sooda, S. Sunayana",
    venue:
      "Advances in Data-Driven Computing and Intelligent Systems — Lecture Notes in Networks and Systems, Springer",
    year: "2025",
    url: "https://doi.org/10.1007/978-981-96-5370-6_2",
    summary:
      "An end-to-end pipeline that turns public advertisement videos into a multimodal dataset (video, best frame, transcript, metadata, LLM captions) for image-guided text-to-video generation, plus a comparison of LLM captioning approaches on Ego4D.",
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "ADGen — Image-guided text-to-video dataset",
    period: "2023 — 2024",
    description:
      "Final-year project: a multimodal data pipeline for advertisement video generation.",
    points: [
      "Built a 720-video, 15-category, 24-hour ad dataset from public URLs using yt-dlp, video2dataset and FFmpeg.",
      "Transcribed audio with Whisper (chosen over wav2vec 2.0), picked a representative frame with ResNet-50, described it with LLaVA-NeXT-13B and fused everything into captions with an LLM.",
      "Benchmarked WizardLM vs Gemini 1.0 Pro captioning on Ego4D across BLEU, ROUGE, METEOR, SPICE and SBERT similarity.",
    ],
    tags: ["Python", "PyTorch", "LLaVA", "Whisper", "FFmpeg"],
    link: "https://doi.org/10.1007/978-981-96-5370-6_2",
  },
  {
    name: "Nutrition extraction from food labels",
    period: "2023",
    description: "Automated food journaling from a photo of a nutrition label.",
    points: [
      "YOLOv8 for text detection, a CNN for recognition, and OpenCV preprocessing to exploit the standard label layout.",
      "Results served by a Flask API to a Kotlin Android app.",
    ],
    tags: ["YOLOv8", "OpenCV", "Flask", "Kotlin"],
  },
  {
    name: "MeetProff",
    period: "2022 — 2023",
    description: "IoT faculty-tracking system to make student–teacher meetings easier.",
    points: [
      "RFID tags and Raspberry Pi nodes reported faculty locations across campus.",
      "Built the Flutter Android app on MongoDB that surfaced live availability.",
    ],
    tags: ["Flutter", "MongoDB", "Raspberry Pi", "RFID"],
  },
  {
    name: "Traffic Police DBMS",
    period: "2022",
    description: "Full-stack admin app for managing traffic-offence records.",
    points: ["React frontend with a Flask + SQL backend."],
    tags: ["React", "Flask", "SQL"],
    link: "https://github.com/swaroopb2001/project-work-2",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Java", "C++"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js (App Router, RSC)",
      "Apollo Client",
      "Tailwind CSS",
      "Design systems",
      "HTML/CSS",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "GraphQL", "Kafka", "RabbitMQ", "PostgreSQL", "Redis", "Flask"],
  },
  {
    group: "Platform & Observability",
    items: ["Docker", "Helm", "Kubernetes", "Datadog", "Sentry", "Git", "Linux"],
  },
  {
    group: "ML / Data",
    items: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "Pandas", "LLMs / multimodal models"],
  },
];

// Condensed bullets for the one-page /resume. Keyed by experience title.
export const resumeBullets: Record<string, string[]> = {
  "Software Engineer": [
    "Led remediation of OOM crashes and intermittent 503s after the CareHub 2.0 scale-up across auth, GraphQL and React Server Components; cut error-driven memory spikes from ~70–150 MB to negligible and per-error logs ~10× (34 KB → 3–4 KB).",
    "Fixed an Apollo Client config shipping dev-mode behaviour to production and streamlined error logging — ~40% reduction in Datadog log volume.",
    "Diagnosed 40–60 s member-page stalls to a slow-failing auth guard in a downstream GraphQL service; coordinated a fix taking loads from ~60 s to ~4–5 s. Drove viewport-based route prefetching, saving ~1.5–2 s per navigation.",
    "Built the CareHub 2.0 foundation on Next.js App Router: Figma design tokens → CSS-variable theming, font-based icon system, core components, Docker + Helm runtime config, server/browser Apollo Client, Sentry and Datadog.",
    "Designed and delivered backend systems in NestJS/TypeScript: member Snooze (data model, lifecycle, prioritisation suppression, domain events); computer-vision assessment workflows (state machine, rule-based next-best-action, Kafka → Aurora persistence); Weekly Goals migration.",
    "Built Member Notes (debounced/idle autosave with persisted drafts) and Member Alerts; led the frontend for onboarding specialists' move into CareHub — 6 workflows, SMS messaging, Transfer-to-Coach, AI smart summaries — enabling a legacy tool's retirement.",
    "Migrated 64 events across 3 services from RabbitMQ to Kafka with flag-gated cutovers, removing duplicate real-time socket events; added Kafka-driven Apollo cache invalidation. Manager Spot Award.",
  ],
  "Software Engineering Intern": [
    "Rotated through Developer Experience (Backstage developer portal), Member Record (care-team table, health-log and pain-data views) and Workflows (RabbitMQ → Kafka migration) before converting to full time.",
  ],
  "Research Intern": [
    "Preprocessed EEG signals in MATLAB for a VGST-funded neurological-disorder project; automated the pipeline and analysed the data with ML algorithms.",
  ],
};

export const education = {
  school: "BMS College of Engineering, Bengaluru",
  degree: "B.E. in Computer Science and Engineering",
  period: "2020 — 2024",
  gpa: "8.5 / 10",
};
