/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        primarySoft: "#FFF7ED",
        textMain: "#1F2937",
        textMuted: "#6B7280",
      },
    },
  },
  plugins: [],
};
