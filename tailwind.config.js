/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        scrollDown: {
          "0%": { transform: "translate3d(0, -25px, 0)" },
          "50%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(0, 70px, 0)" },
        },
      },
      animation: {
        scrollDown: "scrollDown 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
