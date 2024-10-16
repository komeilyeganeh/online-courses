/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(to right, #020024, #090979)"
      }
    },
  },
  plugins: [],
}

