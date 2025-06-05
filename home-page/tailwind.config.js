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
      },
      colors: {
        primary: "#3997FF",
        secondary: "",
        light: "#FAFAFA",
        dark: "#121212",
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

