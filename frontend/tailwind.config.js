/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};
