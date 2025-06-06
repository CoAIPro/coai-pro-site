/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Outfit', 'sans-serif'],
        secondary: ['Nohemi', 'sans-serif'],
        aeonik: ['Aeonik Pro TRIAL', 'sans-serif'],
        clash: ['Clash Display Variable', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
      colors: {
        primary: "#3997FF",
        secondary: "",
        light: "#FAFAFA",
        dark: "#121212",
        textGray: "#667085",
        titleColor: "#1A1A1A",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
}

