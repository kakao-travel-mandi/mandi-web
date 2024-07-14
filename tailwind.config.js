/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          DEFAULT: "#00B288",
          50: "#EBF6F4",
          100: "#CCF0E7",
          200: "#99E0CF",
          300: "#66D1B8",
          400: "#33C1A0",
          500: "#00B288",
          600: "#008E6D",
          700: "#006B52",
        },
        gray: {
          50: "#F7F8FA",
          100: "#F2F3F6",
          200: "#EAEBEE",
          300: "#DCDEE3",
          400: "#D1D3D8",
          500: "#ADB1BA",
          600: "#868B94",
          700: "#4D5159",
          800: "#393A40",
        },
        white: "#ffffff",
        black: "#212124",
        red: {
          DEFAULT: "#F35E5E",
          light: "#FCEEEE",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-out": {
          from: { transform: "none" },
          to: { transform: "translateY(100%)" },
        },
        "fade-in": {
          from: { transform: "translateY(100%)" },
          to: { transform: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sheet-up": "fade-in 0.3s ease-in-out forwards",
        "sheet-down": "fade-out 0.3s ease-in-out forwards",
      },
      boxShadow: {
        up: "0 -2px 3px rgba(0, 0, 0, 0.5)",
        down: "0 2px 3px rgba(0, 0, 0, 0.5)",
        inside: "-3px -3px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
