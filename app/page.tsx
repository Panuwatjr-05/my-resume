"use client";

import { useState, useRef, useEffect } from "react";
import ProjectModal from "@/components/ProjectModal";
import { projects, experiences, research, stack, activities } from "@/components/data";

const ICONS: Record<string, string> = {
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

type Project = (typeof projects)[number];

const W = "w-full max-w-7xl mx-auto px-6 lg:px-10";

function ProfilePhoto() {
  const [hasError, setHasError] = useState(false);
  return (
    <div
      className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
      style={{
        border: "1px solid oklch(0.68 0.22 255 / 0.25)",
        background: "var(--surface)",
      }}
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/profile.jpg"
          alt="Panuwat Rapromma"
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
            style={{ color: "oklch(0.68 0.22 255 / 0.4)" }}>
            <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <p className="text-xs text-center px-6 leading-relaxed" style={{ color: "oklch(0.45 0.02 255)" }}>
            วางรูปชื่อ<br />
            <span style={{ color: "var(--accent)" }}>profile.jpg</span><br />
            ใน folder <span style={{ color: "var(--accent)" }}>public/</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = projectsGridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      <div className="min-h-screen">

        {/* ── Navbar ─────────────────────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 z-40"
          style={{
            height: 72,
            background: "oklch(0.06 0.025 255 / 0.92)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid oklch(0.68 0.22 255 / 0.15)",
            boxShadow: "0 1px 24px oklch(0.68 0.22 255 / 0.04)",
          }}
        >
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-center h-full gap-10">
            <a
              href="#about"
              className="px-5 py-2 text-sm font-semibold rounded-xl transition-all hover:opacity-85"
              style={{
                background: "var(--accent)",
                color: "oklch(0.07 0.022 255)",
                boxShadow: "0 0 16px oklch(0.68 0.22 255 / 0.2)",
              }}
            >
              About me
            </a>
            {["Work", "Stack", "Research", "Experience", "Activity", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="nav-link text-base font-medium tracking-wide transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden items-center justify-between h-full px-5">
            <a
              href="#about"
              className="text-sm font-semibold tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Panuwat R.
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col gap-[5px] p-2"
              aria-label="Open navigation menu"
            >
              <span className="block w-5 h-px" style={{ background: "var(--ink)" }} />
              <span className="block w-5 h-px" style={{ background: "var(--ink)" }} />
              <span className="block w-3 h-px" style={{ background: "var(--accent)" }} />
            </button>
          </div>
        </nav>

        {/* ── Mobile menu overlay ─────────────────────── */}
        {mobileMenuOpen && (
          <div
            className="menu-enter fixed inset-0 z-50 flex flex-col"
            style={{
              background: "oklch(0.05 0.022 255 / 0.98)",
              backdropFilter: "blur(32px)",
            }}
          >
            {/* Header row */}
            <div
              className="flex items-center justify-between px-6 shrink-0"
              style={{ height: 72, borderBottom: "1px solid oklch(0.68 0.22 255 / 0.12)" }}
            >
              <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                Panuwat R.
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg"
                aria-label="Close navigation menu"
                style={{ color: "var(--muted)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-8 pt-10 gap-7 flex-1">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-semibold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                About me
              </a>
              {["Work", "Stack", "Research", "Experience", "Activity", "Contact"].map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-semibold tracking-tight transition-opacity hover:opacity-60"
                  style={{ color: "var(--ink)" }}
                >
                  {s}
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="px-8 pb-12 shrink-0">
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Available for Internship · 2026
              </p>
            </div>
          </div>
        )}

        {/* ── Hero ───────────────────────────────────── */}
        <section id="about" className="relative overflow-hidden pt-36 pb-24" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div className="hero-glow" />

          <div className={`${W} grid lg:grid-cols-[1fr_360px] gap-16 items-center w-full`}>
            {/* Left: text */}
            <div>
              <p
                className="hero-item text-xs tracking-[0.18em] uppercase mb-8 flex items-center gap-3 font-medium"
                style={{ color: "var(--accent)", "--delay": 80 } as React.CSSProperties}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 5px oklch(0.68 0.22 255 / 0.5)" }}
                />
                Available for Internship · 2026
              </p>

              <h1
                className="hero-item font-semibold tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ink)", textWrap: "balance", "--delay": 180 } as React.CSSProperties}
              >
                Panuwat<br />
                <span style={{ color: "oklch(0.72 0.18 255)" }}>Rapromma</span>
              </h1>

              <p className="hero-item text-xl font-light mb-5" style={{ color: "oklch(0.6 0.02 255)", "--delay": 280 } as React.CSSProperties}>
                Frontend · Backend · Full-Stack · Software Development
              </p>

              <p className="hero-item text-base leading-relaxed mb-10" style={{ color: "var(--muted)", maxWidth: "52ch", textWrap: "pretty", "--delay": 360 } as React.CSSProperties}>
                Computer Science student at Naresuan University with a passion for building and
                problem-solving through code. Seeking an internship in Frontend, Backend, Full-Stack,
                or Software Development to gain hands-on experience and grow as a developer.
              </p>

              <div className="hero-item flex flex-wrap gap-4" style={{ "--delay": 440 } as React.CSSProperties}>
                <a
                  href="#contact"
                  className="px-6 py-3 text-base font-medium rounded-xl transition-all hover:opacity-90"
                  style={{
                    background: "var(--accent)",
                    color: "oklch(0.07 0.022 255)",
                    boxShadow: "0 0 20px oklch(0.68 0.22 255 / 0.2)",
                  }}
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/Panuwatjr-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-base font-medium rounded-xl transition-colors hover:bg-white/5"
                  style={{ border: "1px solid var(--border)", color: "var(--ink)" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Right: profile photo */}
            <div className="hero-item flex justify-center lg:justify-end" style={{ "--delay": 200 } as React.CSSProperties}>
              <ProfilePhoto />
            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────── */}
        <section id="work" className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Projects</h2>
          </div>

          <div ref={projectsGridRef} className={`grid lg:grid-cols-2 gap-5${cardsVisible ? " cards-visible" : ""}`}>
            {projects.map((p, cardIndex) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p)}
                className="project-card project-card-anim w-full text-left rounded-2xl transition-all group overflow-hidden"
                style={{
                  border: "1px solid oklch(0.22 0.05 255)",
                  background: "linear-gradient(135deg, oklch(0.13 0.04 255) 0%, oklch(0.10 0.025 255) 100%)",
                  "--card-i": cardIndex,
                } as React.CSSProperties}
              >
                {/* Top accent bar */}
                <div className="h-px w-full" style={{ background: "linear-gradient(to right, oklch(0.68 0.22 255 / 0.6), transparent)" }} />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        color: "var(--accent)",
                        background: "oklch(0.68 0.22 255 / 0.1)",
                        border: "1px solid oklch(0.68 0.22 255 / 0.22)",
                      }}
                    >
                      {p.number}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        border: "1px solid oklch(0.68 0.22 255 / 0.3)",
                        color: "var(--accent)",
                        background: "oklch(0.68 0.22 255 / 0.08)",
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-2 tracking-tight"
                    style={{ color: "var(--ink)", letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.55 0.02 255)", lineHeight: 1.65 }}>
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium"
                        style={{
                          background: "oklch(0.68 0.22 255 / 0.08)",
                          color: "oklch(0.72 0.12 255)",
                          border: "1px solid oklch(0.68 0.22 255 / 0.18)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span
                        className="text-xs px-3 py-1.5 rounded-lg font-mono"
                        style={{ background: "oklch(0.15 0.03 255)", color: "oklch(0.5 0.03 255)", border: "1px solid oklch(0.22 0.04 255)" }}
                      >
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-4"
                    style={{ borderTop: "1px solid oklch(0.22 0.04 255)" }}>
                    <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                      View details
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ color: "var(--accent)" }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── Stack ──────────────────────────────────── */}
        <section id="stack" className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Stack</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {stack.map((s) => (
              <div
                key={s.category}
                className="p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, oklch(0.13 0.04 255) 0%, oklch(0.10 0.025 255) 100%)",
                  border: "1px solid oklch(0.22 0.05 255)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                  <p className="text-[10px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
                    {s.category}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors hover:bg-white/5"
                      style={{ background: "oklch(0.08 0.03 255)", border: "1px solid oklch(0.18 0.04 255)" }}
                    >
                      {ICONS[item] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={ICONS[item]} alt={item} width={18} height={18} style={{ flexShrink: 0 }} />
                      ) : (
                        <span className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold shrink-0"
                          style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                          {item[0]}
                        </span>
                      )}
                      <span className="text-sm" style={{ color: "oklch(0.82 0.015 255)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Research ───────────────────────────────── */}
        <section id="research" className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Research</h2>
          </div>
          {research.map((r, i) => (
            <div key={i} className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, oklch(0.13 0.04 255) 0%, oklch(0.10 0.025 255) 100%)",
                border: "1px solid oklch(0.22 0.05 255)",
              }}>
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <h3
                  className="text-xl font-bold tracking-tight flex-1"
                  style={{ color: "var(--ink)", letterSpacing: "-0.02em", textWrap: "balance", minWidth: "200px" } as React.CSSProperties}
                >
                  {r.title}
                </h3>
                <span
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full shrink-0"
                  style={{ color: "oklch(0.78 0.18 145)", background: "oklch(0.72 0.15 145 / 0.12)", border: "1px solid oklch(0.72 0.15 145 / 0.3)" }}
                >
                  {r.status}
                </span>
              </div>

              <p className="text-sm mb-1" style={{ color: "oklch(0.58 0.015 255)" }}>
                {r.university} · Advisor: {r.advisor}
              </p>

              <p className="text-sm leading-relaxed mb-6 mt-4" style={{ color: "oklch(0.62 0.015 255)", lineHeight: 1.75 }}>
                {r.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{
                      background: "oklch(0.68 0.22 255 / 0.08)",
                      color: "oklch(0.72 0.12 255)",
                      border: "1px solid oklch(0.68 0.22 255 / 0.18)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5">
                {r.items.map((item, j) => (
                  <li key={j} className="flex gap-3" style={{ color: "oklch(0.62 0.015 255)" }}>
                    <span className="mt-[9px] shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Experience ─────────────────────────────── */}
        <section id="experience" className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Experience</h2>
          </div>
          <div className="space-y-0">
            {experiences.map((e, i) => (
              <div key={i} className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-12 py-10 transition-colors hover:bg-white/[0.015] px-4 -mx-4 rounded-2xl"
                style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex sm:flex-col gap-3 sm:gap-2 pt-1">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-lg self-start"
                    style={{
                      color: "var(--accent)",
                      background: "oklch(0.68 0.22 255 / 0.1)",
                      border: "1px solid oklch(0.68 0.22 255 / 0.2)",
                    }}
                  >
                    {e.period}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-1 tracking-tight"
                    style={{ color: "var(--ink)", letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
                  >
                    {e.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-sm font-medium" style={{ color: "oklch(0.72 0.08 255)" }}>{e.org}</span>
                    <span className="text-xs" style={{ color: "oklch(0.35 0.02 255)" }}>·</span>
                    <span className="text-sm" style={{ color: "var(--muted)" }}>{e.event}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {e.items.map((item, j) => (
                      <li key={j} className="flex gap-3" style={{ color: "oklch(0.62 0.015 255)" }}>
                        <span className="mt-[9px] shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>

        {/* ── Education ──────────────────────────────── */}
        <section className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Education</h2>
          </div>
          <div className="space-y-0">
            {[
              { period: "2023 — 2026", degree: "B.Sc. Computer Science", school: "Naresuan University, Phitsanulok", status: "In Progress" },
              { period: "2018 — 2023", degree: "Science-Mathematics Program", school: "Yangklon Wittaya School", status: null },
            ].map((ed, i) => (
              <div key={i} className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-12 py-9 transition-colors hover:bg-white/[0.015] px-4 -mx-4 rounded-2xl"
                style={{ borderTop: "1px solid var(--border)" }}>
                <div className="pt-1">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-lg inline-block"
                    style={{
                      color: "var(--accent)",
                      background: "oklch(0.68 0.22 255 / 0.1)",
                      border: "1px solid oklch(0.68 0.22 255 / 0.2)",
                    }}
                  >
                    {ed.period}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3
                      className="text-xl font-bold tracking-tight"
                      style={{ color: "var(--ink)", letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
                    >
                      {ed.degree}
                    </h3>
                    {ed.status && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ color: "oklch(0.72 0.15 145)", background: "oklch(0.72 0.15 145 / 0.1)", border: "1px solid oklch(0.72 0.15 145 / 0.25)" }}>
                        {ed.status}
                      </span>
                    )}
                  </div>
                  <p className="text-base" style={{ color: "var(--muted)" }}>{ed.school}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>

        {/* ── Activity ───────────────────────────────── */}
        <section id="activity" className={`pb-28 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Activities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <div key={act.id}>
                <div className="grid grid-cols-2 gap-2 mb-4" style={{ maxWidth: "480px" }}>
                  {act.images.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-xl"
                      style={{ border: "1px solid oklch(0.22 0.05 255)", height: "180px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${act.title} — ภาพที่ ${i + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ color: "var(--accent)", background: "var(--accent-dim)", border: "1px solid oklch(0.68 0.22 255 / 0.2)" }}>
                    {act.period}
                  </span>
                  <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{act.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <section id="contact" className={`pb-32 ${W}`}>
          <div className="section-label mb-12">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--ink)", textWrap: "balance" } as React.CSSProperties}>Contact</h2>
          </div>
          <div className="relative overflow-hidden p-10 rounded-2xl"
            style={{
              border: "1px solid oklch(0.68 0.22 255 / 0.3)",
              background: "var(--surface)",
              boxShadow: "0 0 60px oklch(0.68 0.22 255 / 0.04)",
            }}>
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, oklch(0.68 0.22 255 / 0.08), transparent 70%)" }} />
            <p
              className="font-bold tracking-tight mb-10"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--ink)", letterSpacing: "-0.02em" }}
            >
              Open to internship opportunities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  href: "mailto:panuwatr66@nu.ac.th", type: "Email", label: "panuwatr66@nu.ac.th",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
                },
                {
                  href: "https://github.com/Panuwatjr-05", type: "GitHub", label: "Panuwatjr-05", target: "_blank",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>,
                },
                {
                  href: "tel:0969590153", type: "Phone", label: "096-959-0153",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                },
                {
                  href: "#", type: "Location", label: "Phitsanulok, Thailand",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
                },
              ].map((c) => (
                <a key={c.type} href={c.href} target={(c as { target?: string }).target}
                  rel={(c as { target?: string }).target ? "noopener noreferrer" : undefined}
                  className="flex flex-col gap-4 p-5 rounded-xl transition-colors hover:bg-white/[0.05]"
                  style={{ border: "1px solid oklch(0.22 0.03 255)" }}>
                  <span style={{ color: "var(--accent)" }}>{c.icon}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase" style={{ color: "oklch(0.38 0.015 255)" }}>{c.type}</span>
                    <span className="text-sm font-medium" style={{ color: "oklch(0.78 0.015 255)" }}>{c.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────── */}
        <footer className={`pb-10 ${W} flex items-center justify-between`} style={{ borderTop: "1px solid var(--border)" }}>
          <p className="pt-8 text-xs" style={{ color: "var(--muted)" }}>Panuwat Rapromma · 2026</p>
          <p className="pt-8 text-xs" style={{ color: "oklch(0.3 0.02 255)" }}>Built with Next.js</p>
        </footer>
      </div>
    </>
  );
}
