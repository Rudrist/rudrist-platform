/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "transparent": "#00000000",
      "white": {
        100: "#FFFFFF",
        200: "#F8F8F8",
        300: "#E8E8E8",
      },
      "black": {
        100: "#232A3D",
        200: "#2D3248",
        300: "#33394C",
      },
      "gray": {
        100: "#D8D8D8",
        200: "#C8C8C8",
        300: "#B8B8B8",
      },
      "iris": {
        100: "#5D5FEF",
        200: "#7879F1",
        300: "#A5A6F6",
      },
      "fuschi": {
        100: "#EF5DA8",
        200: "#F178B6",
        300: "#FCDDEC",
      },
      "lime": {
        100: "#20C997",
        200: "#40C79E",
        300: "#4BEBBB",
      },
    },
    extend: {},
  },
  plugins: [],
};
