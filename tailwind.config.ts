import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(0.09 0.005 240)",
        surface: "oklch(0.13 0.008 240)",
        "surface-2": "oklch(0.17 0.008 240)",
        ink: "oklch(0.95 0.005 240)",
        muted: "oklch(0.5 0.01 240)",
        accent: "oklch(0.72 0.15 195)",
        "accent-dim": "oklch(0.55 0.12 195)",
        border: "oklch(0.2 0.008 240)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
