import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "custom-pink": "#FF416C",
        "custom-orange": "#FF4A30",
        primary: {
          500: "#FF4650",
        },
        gray: {
          100: "#FAFAFA",
          200: "#C2C2C2",
          250: "#A3A3A3",
          300: "#666666",
          400: "#4D4D4D",
          500: "#141414",
          600: "#808080",
        },
      },
      backgroundImage: {
        "home-hero-section": "url('/home-hero-bg.png')",
        "home-hero-right": "url('/bgHomeHeroRight2.png')",
        "drone-network-section": "url('/banner-lines.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        // xxs: ".75rem", // 12px
        // xs: ".0.875rem", // 14px
        xxs: ".8rem", // 12px
        xs: "0.9rem", // 14px
        sm: "1.125rem", // 18px
        base: "1.25rem", // 20px
        lg: "1.5rem", //24px
        xl: "2rem", //32px
      },
      fontFamily: {
        sans: ["var(--font-arial)"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
