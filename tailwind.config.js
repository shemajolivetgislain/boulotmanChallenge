/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteTheme: {
          primaryColor: "#6C8644",
          secondColor: "#ffffff",
          accentColor: "#FFFAE5",
          accentDark: "#AAA489",
          lightAccent: "#F6FAF9",
          darkOrange: "#887300",
          darkRed: "#880008",
          textColor: "#000000",
        },
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
