import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{mdx}", "./src/**/*.{js,jsx}", "./src/**/*.{css}"] ,
  theme: {
    extend: {
      colors: {
        "forest-roots": "var(--color-forest-roots)",
        "ancient-bark": "var(--color-ancient-bark)",
        "canopy": "var(--color-canopy)",
        "ancestral-gold": "var(--color-ancestral-gold)",
        "harvest-gold": "var(--color-harvest-gold)",
        "earth-brown": "var(--color-earth-brown)",
        parchment: "var(--color-parchment)",
        linen: "var(--color-linen)",
        "old-paper": "var(--color-old-paper)",
        "tier-gold": "var(--color-tier-gold)",
        "tier-silver": "var(--color-tier-silver)",
        "tier-bronze": "var(--color-tier-bronze)",
        "tier-seedling": "var(--color-tier-seedling)",
        "tier-unverified": "var(--color-tier-unverified)",
        "root-50": "var(--color-root-50)",
        "root-100": "var(--color-root-100)",
        "root-200": "var(--color-root-200)",
        "root-300": "var(--color-root-300)",
        "root-400": "var(--color-root-400)",
        "root-500": "var(--color-root-500)",
        "root-600": "var(--color-root-600)",
        "root-700": "var(--color-root-700)",
        "root-800": "var(--color-root-800)",
        "root-900": "var(--color-root-900)",
        "semantic-success": "var(--color-success)",
        "semantic-warning": "var(--color-warning)",
        "semantic-error": "var(--color-error)",
        "semantic-info": "var(--color-info)",
        "semantic-safety": "var(--color-safety)"
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        display: "var(--font-display)"
      },
      boxShadow: {
        "soft-card": "0 12px 30px rgba(27, 67, 50, 0.12)",
        "soft-gold": "0 12px 30px rgba(201, 168, 76, 0.2)"
      },
      backgroundImage: {
        "parchment-gradient": "radial-gradient(circle at top, rgba(253, 250, 245, 0.9), rgba(248, 244, 237, 1))",
        "heritage-glow": "radial-gradient(circle at 20% 20%, rgba(201, 168, 76, 0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
