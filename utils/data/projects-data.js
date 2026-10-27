export const projectsData = [
  {
    id: "codemind-ai",
    name: "CodeMind AI",
    tagline: "AI-Native Developer Desktop IDE",
    category: "ai-tools",
    badge: "Open Source · Electron Desktop IDE",
    description:
      "An open-source, cross-platform AI-native code editor that provides an integrated developer environment for assisted code analysis, smart completions, and diff inspection.",
    problem:
      "Developers constantly switch between their code editor and disconnected browser AI chats, losing context, file tree awareness, and friction-free code diff application.",
    role: "Creator & Lead Engineer",
    architecture:
      "Architected with Electron and React frontend with Monaco Editor for high-performance code editing, paired with a NestJS backend service, Prisma ORM, PostgreSQL, Zustand for state management, and Tailwind CSS. Implements local IPC communication and structured LLM streaming for real-time diff previews.",
    tools: ["Electron", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Monaco Editor", "Zustand", "Tailwind CSS"],
    code: "https://github.com/symon9/code-mind",
    demo: null,
    image: "/image/codemind.png",
    featured: true,
    isOpenSource: true,
  },
  {
    id: "commitcraft",
    name: "CommitCraft Pro",
    tagline: "AI-Powered Git Workflow & Conventional Commits",
    category: "ai-tools",
    badge: "3.9k+ Installs · VS Code & Open VSX",
    description:
      "Generate commit messages, branch names, and next-step suggestions from your Git diff using Gemini. A developer productivity extension published on Open VSX and VS Code.",
    problem:
      "Maintaining standardized Conventional Commit hygiene across rapid development cycles is tedious and frequently leads to vague commit histories or stalled PR reviews.",
    role: "Creator & Maintainer",
    architecture:
      "Directly hooks into the VS Code Source Control Management (SCM) provider API. Inspects staged diffs, parses commit conventions, and executes Google Gemini LLM prompts with token-efficient context window management. Distributed under MIT on Visual Studio Marketplace and Open VSX.",
    tools: ["TypeScript", "Google Gemini", "VS Code Extension API", "Git SCM", "Open VSX"],
    code: "https://github.com/symon9/symon9-commitcraft",
    demo: "https://open-vsx.org/extension/symon9/symon9-commitcraft",
    image: "/image/commitcraft-pro.gif",
    featured: true,
    isOpenSource: true,
  },
  {
    id: "momi-bump",
    name: "MOMI Bump",
    tagline: "Maternal & Child Digital Health Platform",
    category: "fullstack",
    badge: "Co-Founder & Technical Dev",
    description:
      "A maternal health technology product designed to empower mothers throughout pregnancy and early childhood with milestone tracking, smart symptom clarity, reminders, and doctor-informed support.",
    problem:
      "Expectant mothers in developing and multilingual regions often lack immediate, accessible, and medically guided clarity on pregnancy symptoms and clinical milestones.",
    role: "Co-founder & Software Engineer",
    architecture:
      "Engineered responsive web client and mobile workflows supporting multilingual content delivery. Implemented gestational timeline calculations, AI-assisted symptom clarity triage rules, and appointment scheduling systems with rigorous health privacy guidelines.",
    tools: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
    code: null,
    demo: "https://momibump.com/en",
    image: "/image/momibump.png",
    images: ["/image/momibump.png", "/image/momibump-2.png"],
    featured: true,
    isOpenSource: false,
  },
  {
    id: "stream-app",
    name: "Interactive Video Streaming Platform",
    tagline: "Real-Time Video Delivery & Synchronized Live Streaming",
    category: "fullstack",
    badge: "Full-Stack System",
    description:
      "A full-stack video delivery and interactive streaming platform built at DMK Telecoms, featuring synchronized multi-user playback, real-time live chat, room moderation, and payment workflows.",
    problem:
      "Synchronizing live video playback across distributed mobile and web clients with sub-second drift while managing low-latency chat and creator tips at scale.",
    role: "Software Engineer at DMK Telecoms",
    architecture:
      "Engineered synchronized media playback state machine with WebSocket event dispatch, creator tip processing, room moderation permissions, secure token-based authentication flows, and Cloudflare R2 / video streaming infrastructure.",
    tools: ["React", "React Native", "Node.js", "Express.js", "WebSockets", "Cloudflare R2", "PostgreSQL"],
    code: null,
    demo: null,
    image: "/image/streaming-web-app.png",
    featured: true,
    isOpenSource: false,
  },
  {
    id: "drawfusion",
    name: "DrawFusion",
    tagline: "Interactive Creative Drawing & Canvas Workspace",
    category: "web-apps",
    badge: "Web Application",
    description:
      "A drawing and digital sketching application that allows creators to sign up, configure profile settings, sketch ideas with customizable canvas tools, and export high-resolution illustrations.",
    problem:
      "Providing a fast, zero-latency canvas drawing environment in the browser with seamless cloud saving and profile persistence.",
    role: "Frontend Developer",
    architecture:
      "Built with React and Konva.js for high-performance HTML5 canvas rendering, Supabase for authentication and profile storage, and Tailwind CSS for responsive multi-device layouts.",
    tools: ["React", "Konva.js", "Supabase", "Tailwind CSS"],
    code: null,
    demo: "https://drawfusion.vercel.app",
    image: "/image/drawFusion.png",
    featured: false,
    isOpenSource: false,
  },
  {
    id: "wild-oasis",
    name: "The Wild Oasis & Explore",
    tagline: "Hotel Operations Dashboard & Guest Booking Engine",
    category: "fullstack",
    badge: "Full-Stack Suite",
    description:
      "A comprehensive hotel management platform comprising an operations dashboard for cabin bookings, revenue metrics, and check-ins, alongside a public-facing reservation portal.",
    problem:
      "Fragmented hotel cabin management, manual booking reconciliations, and slow guest check-in workflows.",
    role: "Full-Stack Developer",
    architecture:
      "Composed of a Next.js guest application with Google OAuth and a React administrative dashboard utilizing styled-components, Supabase PostgreSQL with Row Level Security, and Recharts for live occupancy and financial visualization.",
    tools: ["Next.js", "React", "Supabase", "Recharts", "Tailwind CSS", "Styled Components"],
    code: null,
    demo: "https://the-wild-oasis-ht.vercel.app",
    image: "/image/dashboard-light.png",
    featured: false,
    isOpenSource: false,
  },
  {
    id: "game-hub",
    name: "Game Hub",
    tagline: "Interactive Game Discovery & Filter Platform",
    category: "web-apps",
    badge: "Web Application",
    description:
      "A game discovery web platform allowing gamers to browse, search, and filter thousands of titles by platform, genre, and critic ratings with persistent theme preferences.",
    problem:
      "Navigating sprawling game catalogs without intuitive multi-facet filtering and responsive responsive UI feedback.",
    role: "Frontend Developer",
    architecture:
      "Constructed with React, TypeScript, and Chakra UI with responsive grid layouts, custom debounce search hooks, and client-side caching.",
    tools: ["React", "TypeScript", "Chakra UI", "REST API"],
    code: null,
    demo: "https://game-hub-puce-rho.vercel.app",
    image: "/image/gameHub.png",
    featured: false,
    isOpenSource: false,
  },
  {
    id: "basebank",
    name: "BaseBank",
    tagline: "Modern Digital Banking Landing Experience",
    category: "web-apps",
    badge: "Fintech UI",
    description:
      "A responsive landing page showcasing financial services, security highlights, and transaction cards with clean micro-interactions and accessible typography.",
    problem:
      "Communicating complex fintech products through a clean, trust-inspiring, high-conversion visual design.",
    role: "Frontend Developer",
    architecture:
      "Engineered with React and Tailwind CSS, focusing on semantic accessibility, zero layout shifts, and responsive touch-first interactions.",
    tools: ["React", "Tailwind CSS", "JavaScript"],
    code: null,
    demo: "https://basebank.netlify.app",
    image: "/image/baseBank.png",
    featured: false,
    isOpenSource: false,
  },
];
