/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bgPrimary: "var(--fondo1)",
        bgSecundary: "var(--fondo2)",
        text: "var(--texto1)",
        textAccent: "var(--texto2)",
        primaryColor: "#00C2FF",

        primaryColorAccent: "#90c0fa",
        buttonColor: "var(--bgButton)",
        scrollHeader: "var(--scrollHeader)",
        shadowColor: "var(--shadowColor)",
        textWhite: "var(--text1)",
        bgToggle: "var(--bgToggle)",
      },
      boxShadow: {
        shadowOne: "var(--shadow1)",
        shadowToggleOne: "var(--shadowToggleTheme1)",
        shadowToggleTwo: "var(--shadowToggleTheme2)",
      },
      keyframes: {
        zoomIn: {
          "0%": { scale: "0.5" },
          "100%": { scale: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 600ms ease",
      },
    },
  },
  plugins: [],
};
