/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#343a40",
        dark: "#495057",
        medium: "#ced4da",
        light: "#f1f3f5",

        theme: "#1098ad",
        accent: "#ffa94d",
      },
    },
    // fontFamily: {
    //   codystar: "Codystar",
    // },
  },
  plugins: [],
};
