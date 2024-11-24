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
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "700px",
        lg: "860px",
        xl: "980px",
        "2xl": "1050px",
      },
    },
    extend: {},
  },
  plugins: [],
};
