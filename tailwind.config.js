/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar],
}