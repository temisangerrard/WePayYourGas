/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14130f",
        charcoal: "#1c1b17",
        cream: "#faf7f0",
        parchment: "#f1ead9",
        clay: "#b5533c",
        moss: "#5c6a4f",
        stone: "#7a7568",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
