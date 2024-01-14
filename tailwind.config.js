/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-background": "var(--color-background)",
        "color-border": "var(--color-border)",
        "menu-active-color": "var(--menu-active-color)",
      },
    },
  },
  plugins: [],
};