/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-dark": "#052636",
        "navy-main": "#0b3c53",
        "navy-card": "#082d3e",
        "amber-main": "#d98819",
        "amber-hover": "#c47712",
        "amber-light": "#fef6e9",
        "teal-accent": "#007a8c",
        "teal-light": "#e6f4f6",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
