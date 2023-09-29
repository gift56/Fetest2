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
      boxShadow: {
        sideShad: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)",
        selectShad: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
        iconShad: "0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
        cardShad: "2px 4px 40px 2px rgba(205, 223, 255, 0.15)",
        tooltipShad: "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        laptop: "1390px",
      },
      fontFamily: {
        Inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
