/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts
        signature: ["Pacifico", "cursive"],
        sans: ["Exo 2", "sans-serif"],
      },
      keyframes: {
        // Keyframes for the flowing background
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        // Animation utility to use the keyframes
        "gradient-pan": "gradient-pan 15s ease infinite",
      },
    },
  },
  plugins: [],
};
