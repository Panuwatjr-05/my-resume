"use client";

import React, { useEffect, useState } from "react";

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

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    setImgIndex(0);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImgIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setImgIndex((i) => Math.min((project.images?.length ?? 1) - 1, i + 1));
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const safeIndex = Math.min(imgIndex, Math.max(0, images.length - 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
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
        <div className="flex flex-1 min-h-0 overflow-hidden">

          {/* ── Left panel ── */}
          <div
            className="flex flex-col overflow-y-auto shrink-0"
            style={{
              width: 380,
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
                    <p className="text-xs font-medium mb-1" style={{ color: "oklch(0.72 0.08 255)" }}>ทดลองใช้งาน</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.55 0.015 255)" }}>
                      สแกน QR เพื่อ add LINE<br />แล้วเริ่มสั่งอาหารได้ทันที
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
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: "oklch(0.13 0.022 255)",
                      color: "oklch(0.68 0.22 255)",
                      border: "1px solid oklch(0.68 0.22 255 / 0.15)",
                    }}
                  >
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

          {/* ── Right panel: image carousel ── */}
          {hasImages && (
            <div className="flex flex-col flex-1 min-w-0" style={{ background: "oklch(0.16 0.05 255)" }}>
              {/* Image + caption grouped together, centered in panel */}
              <div className="relative flex-1 min-h-0 flex items-center justify-center overflow-hidden p-8">

                {/* Nav buttons */}
                {imgIndex > 0 && (
                  <button
                    onClick={() => setImgIndex((i) => i - 1)}
                    className="absolute left-4 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110 active:scale-95"
                    style={{
                      background: "oklch(0.12 0.022 255 / 0.95)",
                      border: "1px solid oklch(0.25 0.022 255)",
                      color: "var(--ink)",
                      boxShadow: "0 4px 16px oklch(0 0 0 / 0.4)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}
                {imgIndex < images.length - 1 && (
                  <button
                    onClick={() => setImgIndex((i) => i + 1)}
                    className="absolute right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110 active:scale-95"
                    style={{
                      background: "oklch(0.12 0.022 255 / 0.95)",
                      border: "1px solid oklch(0.25 0.022 255)",
                      color: "var(--ink)",
                      boxShadow: "0 4px 16px oklch(0 0 0 / 0.4)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}

                {/* Image + caption as a unit */}
                <div className="flex flex-col items-center gap-3 max-w-full max-h-full">
                  <div className="relative rounded-xl overflow-hidden" style={{ maxHeight: "calc(100% - 64px)" }}>
                    {/* Blurred backdrop for portrait images */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      aria-hidden
                      src={images[safeIndex].src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover scale-110"
                      style={{ filter: "blur(20px) brightness(0.4)", zIndex: 0 }}
                    />
                    {/* Main image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={imgIndex}
                      src={images[safeIndex].src}
                      alt={images[safeIndex].caption ?? `${project.title} screenshot ${imgIndex + 1}`}
                      className="relative object-contain"
                      style={{
                        zIndex: 1,
                        maxWidth: "100%",
                        maxHeight: "520px",
                        boxShadow: "0 8px 48px oklch(0 0 0 / 0.5)",
                      }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>

                  {/* Caption + dots right below image */}
                  <div
                    className="flex items-center justify-between gap-4 w-full px-4 py-2.5 rounded-xl"
                    style={{
                      background: "oklch(0.12 0.06 255 / 0.8)",
                      border: "1px solid oklch(0.25 0.08 255 / 0.5)",
                    }}
                  >
                    <p className="flex-1 text-sm" style={{ color: "oklch(0.75 0.04 255)" }}>
                      {images[safeIndex].caption ?? ""}
                    </p>
                    {images.length > 1 && (
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            color: "var(--accent)",
                            background: "oklch(0.68 0.22 255 / 0.12)",
                            border: "1px solid oklch(0.68 0.22 255 / 0.2)",
                          }}
                        >
                          {imgIndex + 1} / {images.length}
                        </span>
                        <div className="flex gap-1.5">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setImgIndex(i)}
                              className="rounded-full transition-all duration-200"
                              style={{
                                width: i === imgIndex ? 20 : 6,
                                height: 6,
                                background: i === imgIndex ? "var(--accent)" : "oklch(0.32 0.05 255)",
                                boxShadow: i === imgIndex ? "0 0 8px var(--accent)" : "none",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
