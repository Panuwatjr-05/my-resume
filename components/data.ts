export const projects = [
  {
    id: "nudorm",
    number: "01",
    title: "Naresuan NUDorm",
    tagline: "Dormitory discovery platform for Naresuan University students",
    description:
      "A web application centralizing dormitory listings near Naresuan University, allowing students to search, compare, and choose accommodations in one place.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary", "Vercel"],
    github: "https://github.com/Panuwatjr-05/NUDorm",
    live: "https://nu-dorm.vercel.app",
    images: [
      { src: "/projects/nudorm/2.png", caption: "User — Homepage: search, compare, and contact dormitories near Naresuan University in one place" },
      { src: "/projects/nudorm/1.png", caption: "User — Sign up page: select role as a student or dorm owner" },
      { src: "/projects/nudorm/3.png", caption: "User — Search results with filters for price, furniture type, and amenities" },
      { src: "/projects/nudorm/4.png", caption: "User — Select dormitories for side-by-side comparison" },
      { src: "/projects/nudorm/5.png", caption: "User — Comparison results highlighting similarities and differences between selected dorms" },
      { src: "/projects/nudorm/6.png", caption: "User — Wishlist: save favorite dormitories to review and compare later" },
      { src: "/projects/nudorm/7.png", caption: "User — Dormitory detail page showing room info, pricing, and amenities" },
      { src: "/projects/nudorm/8.png", caption: "User — Dormitory detail page showing location with a direct link to Google Maps" },
      { src: "/projects/nudorm/9.png", caption: "Owner — Dashboard showing total listings with options to edit and delete" },
      { src: "/projects/nudorm/10.png", caption: "Owner — List a dormitory form: fill in general info and pricing" },
      { src: "/projects/nudorm/11.png", caption: "Owner — List a dormitory form: upload photos and select amenities" },
      { src: "/projects/nudorm/12.png", caption: "Owner — List a dormitory form: review details and publish the listing" },
      { src: "/projects/nudorm/13.png", caption: "Owner — Feedback page showing reviews and ratings from students" },
      { src: "/projects/nudorm/14.png", caption: "Admin — Control dashboard: view, edit, and delete all dormitory listings platform-wide" },
    ],
    highlights: [
      "Built a multi-filter search system to help students find accommodations more conveniently",
      "Developed a Side-by-Side comparison feature to help students make faster decisions",
      "Built a listing management system allowing dorm owners to post and manage their own listings",
      "Implemented role-based access control for User, Owner, and Admin to ensure secure access",
    ],
    details: [
      {
        role: "User",
        items: [
          "Filter dormitories by price range, furniture type, and amenities",
          "Side-by-side comparison showing similarities and differences between selected dorms",
          "Save favorite dorms to a personal watchlist",
          "Click location to open Google Maps directly",
        ],
      },
      {
        role: "Owner",
        items: [
          "List dormitory and manage listings on the platform",
          "Dashboard showing total rooms, views, and wishlist saves",
          "Edit or delete listings at any time",
        ],
      },
      {
        role: "Admin",
        items: [
          "View and manage all dormitory listings platform-wide",
          "Remove or edit any listing to maintain platform quality",
        ],
      },
    ],
  },
  {
    id: "bidbid",
    number: "02",
    title: "BidBid",
    tagline: "Real-time auction and fixed-price marketplace",
    description:
      "A full-stack online marketplace supporting both fixed-price purchases and real-time auction bidding within a single platform.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Supabase Realtime", "NextAuth", "Vercel"],
    github: "https://github.com/Panuwatjr-05/BIDBID",
    live: "https://bidbid-app.vercel.app",
    images: [
      { src: "/projects/bidbid/1.png", caption: "Sign up page: select role as Buyer or Seller" },
      { src: "/projects/bidbid/2.png", caption: "Homepage showing all products available on the platform" },
      { src: "/projects/bidbid/3.png", caption: "Buyer — All products page with category filtering" },
      { src: "/projects/bidbid/4.png", caption: "Buyer — Fixed Price product detail page with a buy now button" },
      { src: "/projects/bidbid/5.png", caption: "Buyer — All products from a specific store" },
      { src: "/projects/bidbid/6.png", caption: "Buyer — Dashboard with purchase history and followed items" },
      { src: "/projects/bidbid/7.png", caption: "Buyer — Auction product detail page with a real-time countdown timer" },
      { src: "/projects/bidbid/8.png", caption: "Buyer — Bid history showing all bids placed on the product" },
      { src: "/projects/bidbid/9.png", caption: "Buyer — Winner announcement displayed when the auction ends" },
      { src: "/projects/bidbid/10.png", caption: "Seller — Store dashboard with total products, sales overview, and active auctions" },
      { src: "/projects/bidbid/11.png", caption: "Seller — Add Fixed Price product form: fill in product details and price" },
      { src: "/projects/bidbid/12.png", caption: "Seller — Add Fixed Price product form: upload images and description" },
      { src: "/projects/bidbid/13.png", caption: "Seller — Add Auction product form: set starting price and auction duration" },
      { src: "/projects/bidbid/14.png", caption: "Seller — Add Auction product form: upload images and confirm listing" },
      { src: "/projects/bidbid/15.png", caption: "Seller — Product management page with edit and delete options" },
      { src: "/projects/bidbid/16.png", caption: "Admin — Control dashboard: manage all products, stores, and users platform-wide" },
    ],
    highlights: [
      "Implemented real-time auction bidding with live countdown timers via Supabase Realtime",
      "Architected role-based access control for Buyer, Seller, and Admin to ensure secure platform management",
      "Built a store management system allowing sellers to add products and choose between Fixed Price and Auction listing types",
    ],
    details: [
      {
        role: "Buyer",
        items: [
          "Search and filter products by category, price type (Fixed or Auction)",
          "Bid on products in real-time with live countdown timers",
          "View full auction history and see the winner when bidding ends",
        ],
      },
      {
        role: "Seller",
        items: [
          "Create and manage a personal store with product listings",
          "Choose listing type: Fixed price or Auction with a starting bid",
          "Dashboard showing total products, active/sold inventory, and auction count",
        ],
      },
      {
        role: "Admin",
        items: [
          "View all users, stores, products, and auctions platform-wide",
          "Suspend or reactivate stores and delete products",
        ],
      },
    ],
  },
  {
    id: "chillfill",
    number: "03",
    title: "Chill Fill",
    tagline: "Food ordering system via LINE Messaging API",
    description:
      "A food ordering web application operating entirely through LINE Messaging API, enabling customers to place orders without a dedicated mobile app.",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "LINE Messaging API", "Vercel"],
    github: "https://github.com/Panuwatjr-05/Chill_Fill",
    live: "https://chill-fill.vercel.app",
    images: [
      { src: "/projects/chillfill/1.png", caption: "User — Chat screen after adding the LINE account, showing the main menu" },
      { src: "/projects/chillfill/2.png", caption: "User — Promotion screen showing special offers from the store" },
      { src: "/projects/chillfill/3.png", caption: "User — Store location page with a map" },
      { src: "/projects/chillfill/4.png", caption: "User — Full menu list with category filtering" },
      { src: "/projects/chillfill/5.png", caption: "User — Select food and add to cart, choose Regular or Special size" },
      { src: "/projects/chillfill/6.png", caption: "User — Order page: confirm items and enter delivery address" },
      { src: "/projects/chillfill/7.png", caption: "User — Screen after placing the order, waiting for store confirmation" },
      { src: "/projects/chillfill/8.png", caption: "User — Upload payment slip via LINE to confirm payment" },
      { src: "/projects/chillfill/9.png", caption: "User — Order status screen after the admin has confirmed the payment slip" },
      { src: "/projects/chillfill/10.png", caption: "Admin — Incoming payment slip screen with full order details" },
      { src: "/projects/chillfill/11.png", caption: "Admin — Screen after confirming the payment slip, order status updates instantly" },
      { src: "/projects/chillfill/12.png", caption: "Admin — Dashboard with sales overview, today's orders, and monthly statistics" },
      { src: "/projects/chillfill/13.png", caption: "Admin — Add product page: fill in name, price, category, and upload image" },
      { src: "/projects/chillfill/14.png", caption: "Admin — All orders page with status and details for each order" },
    ],
    highlights: [
      "Built food ordering via LINE Messaging API, eliminating the need for a standalone app",
      "Designed payment slip verification within LINE to complete ordering and payment in one place",
      "Developed admin panel with menu CRUD and sales dashboard",
    ],
    details: [
      {
        role: "User",
        items: [
          "Browse and filter menus by category through LINE chat",
          "Choose portion size (Regular / Special) per item",
          "Place order with delivery address, then submit payment slip in-chat",
          "Contact the store via LINE for any questions",
        ],
      },
      {
        role: "Admin",
        items: [
          "Full menu management: add, edit, delete items with photos",
          "View all incoming orders and revenue in a real-time dashboard",
          "Verify payment slips submitted by customers directly in LINE",
          "Dashboard shows total sales, active items, and order history",
        ],
      },
    ],
  },
  {
    id: "planning",
    number: "04",
    title: "Planning",
    tagline: "Personal planning app replacing traditional note-taking",
    description:
      "A full-stack personal planning application that replaces traditional note-taking with a structured and organized digital workflow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudinary", "Vercel"],
    github: "https://github.com/Panuwatjr-05/Planning",
    live: "https://planning-pearl-xi.vercel.app",
    images: [
      { src: "/projects/planning/1.png", caption: "User — Task planning page: set priority levels and schedule deadlines in advance" },
      { src: "/projects/planning/2.png", caption: "User — Calendar view showing all tasks organized by their scheduled date and time" },
      { src: "/projects/planning/3.png", caption: "User — Project list page showing all planned projects" },
      { src: "/projects/planning/4.png", caption: "User — Project detail page showing sub-tasks and progress for each step" },
      { src: "/projects/planning/5.png", caption: "User — Goal overview page: tick the checkbox when a goal is achieved to track progress" },
      { src: "/projects/planning/6.png", caption: "User — Idea Board page collecting all saved ideas" },
      { src: "/projects/planning/7.png", caption: "User — Idea detail page showing content and attached images" },
    ],
    highlights: [
      "Built task scheduling with priority levels and deadlines to improve time management",
      "Developed calendar view to give users an instant overview of upcoming tasks",
      "Implemented goal tracking and idea board to support long-term planning",
    ],
    details: [
      {
        role: "User",
        items: [
          "Create tasks with priority levels (urgent, normal, low) and set deadlines",
          "Calendar view showing all scheduled tasks at a glance",
          "Project planning board to outline and track multi-step projects",
          "Goal tracker: set goals and tick them off when completed",
          "Idea board: capture and store ideas with images and descriptions",
        ],
      },
    ],
  },
];

export const experiences = [
  {
    title: "Prompt Engineer",
    org: "AI Vibe Coding Competition",
    event: "SCI ACADEMIC EXPO 2026",
    period: "2026",
    items: [
      "Competed in a high-pressure AI Coding Challenge, solving CSV data extraction tasks within a strict 2-minute limit",
      "Engineered precise prompts to generate optimized Python scripts for fast and accurate data analysis",
    ],
  },
  {
    title: "IT Support Staff",
    org: "PACCON 2026",
    event: "Pure and Applied Chemistry International Conference 2026",
    period: "2026",
    items: [
      "Managed IT setup and audio-visual equipment for a dedicated session room at a large-scale international conference",
      "Provided real-time technical support to ensure speakers and participants could operate smoothly throughout the event",
    ],
  },
  {
    title: "Co-designer",
    org: "Idea Pitch Day 2024",
    event: "Empathetic Support Solutions Competition",
    period: "2024",
    items: [
      "Co-designed a Social Enterprise app matching volunteers with wheelchair users, elderly, and visually impaired individuals",
      "Developed a 4-phase business roadmap to drive financial sustainability and expand services nationwide",
    ],
  },
];

export const research = [
  {
    title: "A LINE-Based Financial Platform and Decision Support Dashboard for Farmers",
    status: "Ongoing Research",
    university: "Naresuan University",
    advisor: "Adirek Rungrangsee",
    description:
      "A full-stack web application integrated with LINE to help farmers record farm finances and track crop health through a decision-support dashboard.",
    tech: ["Vue.js", "Node.js", "Express.js", "Supabase", "LINE Messaging API", "LIFF", "n8n", "DigitalOcean"],
    items: [
      "Developing a LINE-based system allowing farmers to record income and expenses without a dedicated app",
      "Built an automated workflow using n8n to process and store farm data into Supabase",
      "Displaying results on a dashboard to support cost analysis and planting cycle planning",
    ],
  },
];

export const activities = [
  {
    id: "pitch",
    period: "2024",
    title: "Idea Pitch Day 2024 — Competition Participant",
    images: [
      "/activities/1.1.png",
      "/activities/1.2.png",
    ],
  },
  {
    id: "freshman",
    period: "2024",
    title: "Freshman Orientation 2024 — Senior Mentor",
    images: [
      "/activities/2.1.png",
      "/activities/2.2.png",
    ],
  },
  {
    id: "identity",
    period: "2025",
    title: "Faculty of Science Identity Day 2025 — Flag Bearer Representative",
    images: [
      "/activities/3.1.png",
      "/activities/3.2.png",
    ],
  },
];

export const ICONS: Record<string, string> = {
  "TypeScript":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Python":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Java":              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "HTML / CSS":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Next.js":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React":             "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Tailwind CSS":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Vite":              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "PostgreSQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Prisma":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "Supabase":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  "Git / GitHub":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Figma":             "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Docker":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Vercel":            "https://cdn.simpleicons.org/vercel/ffffff",
  "VS Code":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Supabase Realtime": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  "NextAuth":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Cloudinary":        "https://cdn.simpleicons.org/cloudinary",
  "LINE Messaging API":"https://cdn.simpleicons.org/line/00c300",
  "n8n":               "https://cdn.simpleicons.org/n8n/ea4b71",
};

export const stack = [
  {
    category: "Languages",
    items: ["Python", "HTML / CSS", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Figma", "Docker", "Vercel", "Prisma", "n8n"],
  },
  {
    category: "Services",
    items: ["LINE Messaging API", "Supabase", "Cloudinary", "AWS"],
  },
];
