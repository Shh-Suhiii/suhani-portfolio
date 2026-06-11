export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  tech: string[];
  image: string;          // /images/projects/...
  github?: string;
  demo?: string;
  content: string[];      // paragraphs for detail page
};

export const projects: Project[] = [
  {
    slug: "modern-periodic-table",
    title: "Modern Periodic Table App",
    summary:
      "Interactive app with element details, search, quizzes, bookmarks, secure APIs, and real-time sync.",
    year: 2025,
    tech: ["Flutter", "Flask", "MySQL", "Firebase"],
    image: "/images/projects/chemistry.png",
    github: "https://github.com/Shh-Suhiii", // replace if separate repo
    content: [
      "Built an interactive experience for exploring elements with clean UI and offline-friendly patterns.",
      "Implemented quiz mode, bookmarks, and secure API endpoints; integrated Firebase for auth and sync.",
    ],
  },
  {
    slug: "airlines-reservation-system",
    title: "Airlines Reservation System",
    summary:
      "Booking platform with authentication, flight search, seat booking, and booking history.",
    year: 2024,
    tech: ["Flutter", "Flask", "MySQL"],
    image: "/images/projects/airlines.png",
    content: [
      "End-to-end flow from search to ticketing; followed REST patterns with validation.",
      "Focused on error handling, reliability, and a simple, guided UX.",
    ],
  },
  {
    slug: "projectfetch-dashboard",
    title: "ProjectFetch Dashboard",
    summary:
      "Responsive landing page + admin dashboard with dynamic content and client query handling.",
    year: 2024,
    tech: ["Next.js", "Supabase"],
    image: "/images/projects/project-fetch.png",
    content: [
      "Built an admin-first workflow to manage content and handle client forms.",
      "Used server components and incremental static regeneration for performance.",
    ],
  },
  {
    slug: "notepaisa-expense-tracker",
    title: "NotePaisa — Expense Tracker",
    summary:
      "Track expenses, budgets, and view analytics; designed for clarity and speed.",
    year: 2024,
    tech: ["Flutter", "Firebase", "MySQL"],
    image: "/images/projects/new-features.png",
    content: [
      "Implemented budgeting and insights; focused on accessibility and crisp visualizations.",
    ],
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    summary:
      "Manages patients, doctors, appointments, and billing with a simple admin flow.",
    year: 2023,
    tech: ["Java", "MySQL"],
    image: "/images/projects/hospital2.jpg",
    content: [
      "Standardized CRUD flows with data integrity checks and modular architecture.",
    ],
  },
];