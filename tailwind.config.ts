import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // electric purple
        secondary: "#312E81", // deep indigo
        accent: "#3B82F6", // electric blue
        highlight: "#A855F7", // soft neon violet
        rich: "#09090B", // background
        surface: "#111827",
        muted: "#A1A1AA",
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at center, rgba(124,58,237,0.35), transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #09090B 0%, #150E2A 40%, #1E1147 70%, #09090B 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.35)",
        "glow-blue": "0 0 40px rgba(59,130,246,0.3)",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1s infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
