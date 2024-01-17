/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': { transform: "translateY(5%)" },
          '50%': { transform: 'translateY(-0%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        jump: 'jump 3s ease-in-out infinite', // Fix the typo here
      },
    },
  },
  plugins: [],
}
