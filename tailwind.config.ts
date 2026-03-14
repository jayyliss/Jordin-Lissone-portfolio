import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B14",
        "background-light": "#0D1117",
        "background-card": "#111827",
        primary: "#00D4FF",
        "primary-dark": "#00A3CC",
        secondary: "#7C3AED",
        "secondary-light": "#9F67FF",
        accent: "#1E293B",
        cyan: {
          DEFAULT: "#00d4ff",
          50: "#e6fbff",
          100: "#b3f3ff",
          200: "#80ebff",
          300: "#4de3ff",
          400: "#1adbff",
          500: "#00d4ff",
          600: "#00aacc",
          700: "#008099",
          800: "#005566",
          900: "#002b33",
        },
        navy: {
          DEFAULT: "#0a0a0f",
          50: "#e8e8ed",
          100: "#c5c5d0",
          200: "#9f9fb3",
          300: "#797996",
          400: "#535379",
          500: "#2d2d5c",
          600: "#1e1e3f",
          700: "#161630",
          800: "#101020",
          900: "#0a0a0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "grid-fade": "gridFade 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gridFade: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.08" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
