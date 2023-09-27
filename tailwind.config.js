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
      },
      screens: {
        laptop: "1390px",
      },
    },
  },
  plugins: [],
};
