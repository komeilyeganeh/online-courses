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
      },
      animation: {
        "about-pattern": "about-pattern 5s linear infinite"
      },
      keyframes: {
        'about-pattern': {
          '0%': { left: '128px' },
          '50%': { left: '140px' },
          '100%': { left: '128px' }
        }
      }
    },
  },
  plugins: [],
}

