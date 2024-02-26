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
  theme: {
    extend: {
      colors: {
        'white-200': '#F8F8F8',
        'Fuschi-100': '#EF5DA8',
        'lime-100': '#20C997',
      }
    },
    fontSize: {
      'h1': '2.5rem',
      'h2': '1.5rem',
      'h3': '1.25rem',
    },
    fontFamily: {
      'kanit': ['Kanit', 'system-ui'],
    },
  },
  plugins: [],
};
