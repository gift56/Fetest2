/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        hashgray: "#D9D9D9",
        hovergray: "#E9EFFF",
        dark: "#0B0B0B",
        inputgray: "#9AA6AC",
        usergray: "#D0E1FF",
      },
    },
  },
  plugins: [],
};
