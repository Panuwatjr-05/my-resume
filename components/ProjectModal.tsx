"use client";

import React, { useEffect, useState } from "react";
import { ICONS } from "@/components/data";

type Detail = { role: string; items: string[] };
type ProjectImage = { src: string; caption?: string };

type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  highlights: string[];
  details: Detail[];
  images?: ProjectImage[];
};

// Role badge colors — blue for end users, teal for providers, amber for admins.
const ROLE_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  User:   { color: "oklch(0.78 0.15 255)", bg: "oklch(0.68 0.22 255 / 0.14)", border: "oklch(0.68 0.22 255 / 0.35)" },
  Buyer:  { color: "oklch(0.78 0.15 255)", bg: "oklch(0.68 0.22 255 / 0.14)", border: "oklch(0.68 0.22 255 / 0.35)" },
  Owner:  { color: "oklch(0.82 0.14 165)", bg: "oklch(0.72 0.15 165 / 0.14)", border: "oklch(0.72 0.15 165 / 0.35)" },
  Seller: { color: "oklch(0.82 0.14 165)", bg: "oklch(0.72 0.15 165 / 0.14)", border: "oklch(0.72 0.15 165 / 0.35)" },
  Admin:  { color: "oklch(0.83 0.15 70)",  bg: "oklch(0.75 0.15 70 / 0.14)",  border: "oklch(0.75 0.15 70 / 0.35)" },
};
const ROLE_FALLBACK = { color: "var(--accent)", bg: "oklch(0.68 0.22 255 / 0.12)", border: "oklch(0.68 0.22 255 / 0.3)" };

function splitCaption(caption?: string): { role: string | null; text: string } {
  if (!caption) return { role: null, text: "" };
  const idx = caption.indexOf(" — ");
  if (idx !== -1) {
    const role = caption.slice(0, idx).trim();
    if (role.length > 0 && role.length <= 12) return { role, text: caption.slice(idx + 3).trim() };
  }
  return { role: null, text: caption };
}

function CaptionText({ caption, textClass, descColor }: { caption?: string; textClass: string; descColor: string }) {
  if (!caption) return null;
  const { role, text } = splitCaption(caption);
  const rs = role ? (ROLE_STYLES[role] ?? ROLE_FALLBACK) : null;
  return (
    <span className={textClass} style={{ color: descColor }}>
      {role && rs && (
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mr-2"
          style={{ color: rs.color, background: rs.bg, border: `1px solid ${rs.border}`, transform: "translateY(-1px)" }}
        >
          {role}
        </span>
      )}
      {text}
    </span>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!project) return;
    setLightbox(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const total = project.images?.length ?? 0;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (lightbox !== null) {
        if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : Math.max(0, i - 1)));
        if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : Math.min(total - 1, i + 1)));
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, lightbox]);

  if (!project) return null;

  const images = project.images ?? [];
  const hasImages = images.length > 0;

  return (
    <>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-6xl flex flex-col rounded-2xl overflow-hidden"
        style={{
          height: "88vh",
          background: "oklch(0.10 0.055 255)",
          border: "1px solid oklch(0.22 0.07 255)",
          boxShadow: "0 0 0 1px oklch(0.68 0.22 255 / 0.12), 0 40px 120px oklch(0 0 0 / 0.7), 0 0 100px oklch(0.68 0.22 255 / 0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">

          {/* ── Left panel ── */}
          <div
            className="flex flex-col overflow-y-auto w-full md:w-[380px] flex-1 md:flex-none order-2 md:order-1"
            style={{
              borderRight: hasImages ? "1px solid oklch(0.16 0.022 255)" : undefined,
            }}
          >
            {/* Project header */}
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid oklch(0.15 0.06 255)" }}>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    color: "var(--accent)",
                    background: "oklch(0.68 0.22 255 / 0.1)",
                    border: "1px solid oklch(0.68 0.22 255 / 0.2)",
                  }}
                >
                  {project.number}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors hover:bg-white/5"
                  style={{ color: "oklch(0.4 0.015 255)" }}
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h2
                className="font-bold leading-tight mb-1"
                style={{ fontSize: "1.5rem", color: "var(--ink)", letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
              >
                {project.title}
              </h2>
              <p className="text-xs mb-5" style={{ color: "oklch(0.58 0.015 255)" }}>
                {project.tagline}
              </p>

              <div className="flex gap-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-xs font-semibold text-center rounded-lg transition-all hover:opacity-85"
                  style={{
                    background: "var(--accent)",
                    color: "oklch(0.07 0.022 255)",
                    boxShadow: "0 0 16px oklch(0.68 0.22 255 / 0.25)",
                  }}
                >
                  Live Site ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-xs font-semibold text-center rounded-lg transition-colors hover:bg-white/5"
                  style={{ border: "1px solid oklch(0.22 0.022 255)", color: "oklch(0.65 0.02 255)" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="px-8 py-5" style={{ borderBottom: "1px solid oklch(0.14 0.055 255)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.015 255)", lineHeight: 1.75 }}>
                {project.description}
              </p>
            </div>

            {/* QR Code — ChillFill only */}
            {project.id === "chillfill" && (
              <div className="px-8 py-5" style={{ borderBottom: "1px solid oklch(0.14 0.055 255)" }}>
                <div className="flex items-center gap-5">
                  <div className="rounded-xl overflow-hidden shrink-0" style={{ border: "1px solid oklch(0.22 0.05 255)", background: "#fff", padding: "6px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/chillfill/qr.png"
                      alt="QR Code สำหรับ add LINE Chill Fill"
                      width={80}
                      height={80}
                      style={{ display: "block" }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: "oklch(0.72 0.08 255)" }}>Try it out</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.55 0.015 255)" }}>
                      Scan QR to add LINE<br />and start ordering instantly
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tech stack */}
            <div className="px-8 py-5" style={{ borderBottom: "1px solid oklch(0.14 0.055 255)" }}>
              <p className="text-[10px] font-medium tracking-[0.12em] uppercase mb-3" style={{ color: "oklch(0.45 0.02 255)" }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5"
                    style={{
                      background: "oklch(0.13 0.022 255)",
                      color: "oklch(0.68 0.22 255)",
                      border: "1px solid oklch(0.68 0.22 255 / 0.15)",
                    }}
                  >
                    {ICONS[t] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={ICONS[t]} alt={t} width={12} height={12} style={{ flexShrink: 0 }} />
                    )}
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Role details */}
            <div className="px-8 py-5 space-y-5">
              {project.details.map((section) => (
                <div key={section.role} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.2 0.06 255)" }}>
                  {/* Role header */}
                  <div
                    className="px-4 py-2.5 flex items-center gap-2"
                    style={{ background: "oklch(0.14 0.06 255)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
                    />
                    <h3
                      className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                      style={{ color: "var(--accent)" }}
                    >
                      {section.role}
                    </h3>
                  </div>
                  {/* Items */}
                  <ul className="px-4 py-3 space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-sm" style={{ color: "oklch(0.72 0.02 255)", lineHeight: 1.55 }}>
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: "oklch(0.45 0.08 255)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel: image gallery ── */}
          {hasImages && (
            <div
              className="min-w-0 w-full flex-none h-[48vh] md:h-auto md:flex-1 order-1 md:order-2 overflow-y-auto"
              style={{ background: "oklch(0.16 0.05 255)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 md:p-6">
                {images.map((img, i) => (
                  <figure key={i} className="flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`View image ${i + 1}${img.caption ? `: ${img.caption}` : ""}`}
                      className="group relative rounded-xl overflow-hidden cursor-zoom-in transition-transform hover:-translate-y-0.5"
                      style={{
                        border: "1px solid oklch(0.25 0.05 255)",
                        aspectRatio: "16 / 10",
                        background: "oklch(0.97 0.003 255)",
                      }}
                    >
                      {/* Main image — full screenshot, never cropped */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.caption ?? `${project.title} screenshot ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                      {/* Hover overlay with zoom hint */}
                      <span
                        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ background: "oklch(0.06 0.02 255 / 0.35)" }}
                      >
                        <span
                          className="flex items-center justify-center w-10 h-10 rounded-full"
                          style={{ background: "oklch(0.06 0.02 255 / 0.8)", border: "1px solid oklch(0.68 0.22 255 / 0.4)", color: "var(--accent)" }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
                          </svg>
                        </span>
                      </span>
                      <span
                        className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 rounded"
                        style={{
                          color: "var(--accent)",
                          background: "oklch(0.10 0.03 255 / 0.85)",
                          border: "1px solid oklch(0.68 0.22 255 / 0.25)",
                        }}
                      >
                        {i + 1}
                      </span>
                    </button>
                    {img.caption && (
                      <figcaption className="px-0.5">
                        <CaptionText caption={img.caption} textClass="text-xs leading-relaxed" descColor="oklch(0.7 0.03 255)" />
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* ── Lightbox: fullscreen image viewer ── */}
    {lightbox !== null && images[lightbox] && (
      <div
        className="menu-enter fixed inset-0 z-[60] flex flex-col"
        style={{ background: "oklch(0.04 0.015 255 / 0.97)", backdropFilter: "blur(8px)" }}
        onClick={() => setLightbox(null)}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between p-5 md:p-6 shrink-0" onClick={(e) => e.stopPropagation()}>
          <div>
            <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>{project.title}</h3>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              Image {lightbox + 1} of {images.length}
            </p>
          </div>
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
            className="p-2 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: "var(--muted)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image + caption area */}
        <div
          className="relative flex-1 min-h-0 flex flex-col items-center justify-center gap-4 px-4 md:px-20 pb-6"
          onClick={(e) => e.stopPropagation()}
        >
          {lightbox > 0 && (
            <button
              onClick={() => setLightbox((i) => (i === null ? i : i - 1))}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110 active:scale-95"
              style={{ background: "oklch(0.12 0.022 255 / 0.9)", border: "1px solid oklch(0.25 0.022 255)", color: "var(--ink)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
          {lightbox < images.length - 1 && (
            <button
              onClick={() => setLightbox((i) => (i === null ? i : i + 1))}
              aria-label="Next image"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110 active:scale-95"
              style={{ background: "oklch(0.12 0.022 255 / 0.9)", border: "1px solid oklch(0.25 0.022 255)", color: "var(--ink)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={lightbox}
            src={images[lightbox].src}
            alt={images[lightbox].caption ?? `${project.title} screenshot ${lightbox + 1}`}
            className="max-w-full object-contain rounded-lg min-h-0"
            style={{ boxShadow: "0 20px 80px oklch(0 0 0 / 0.6)" }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          {images[lightbox].caption && (
            <p className="shrink-0 text-center" style={{ maxWidth: "70ch" }}>
              <CaptionText caption={images[lightbox].caption} textClass="text-sm md:text-base" descColor="oklch(0.85 0.02 255)" />
            </p>
          )}
        </div>
      </div>
    )}
    </>
  );
}
