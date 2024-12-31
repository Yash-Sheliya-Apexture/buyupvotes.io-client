const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Ensure JIT mode is enabled
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        InterDisplay: ["InterDisplay", "sans-serif"],
      },
      screens: {
        xs: { min: "320px" },
      },
      boxShadow: {
        Sidebar: "0px 0px 12px 5px #00000036",
        base: "0px 2px 5px 1px #ff8700",
        btnShadow: "#FF5630 0px 0px 2px 1px",
        newShadow: "#22C55E 0px 0px 2px 1px",
        main: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        blackshadow: "#000 0px 0px 1px 1px",
      },
      colors: {
        "main-color": "#FF5700",
        "sub-color": "#2D2624",
        "gray-border": "#f3f4f6",
        "side-color": "#FF570014",
        "active": "#403633",
        "background-active": "#f0f0f099",
        "light-brown": "#FDE6D9",
        "dark-green": "#004B50",
        "light-gray": "#919EAB",
        "para-color": "#403633",
        "gray-hover": "#6083731c",
        "light-orange": "#FF5630",
        "gray-light": "#F4F6F8",
        "light-red": "#B71D18",
        "border-color": "#e5e7eb",
        "brown-hover": "#919eab14",
      },
      lineHeight: {
        20: "70px",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      fontSize: {
        xxs: "12px",
        xs: "14px",
        small: "16px",
        medium: "18px",
        base: "20px",
        basic: "24px",
        large: "30px",
        xlarge: "35px",
        largest: "60px",
      },
      borderRadius: {
        base: "4px",
        large: "30px",
        small: "20px",
        medium: "10px",
        xlarge: "40px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), flowbite.plugin()],
};
