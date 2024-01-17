/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // keyframes: {
      //   wave: {
      //     // '0%': { transform: 'rotate(0.0deg)' },
      //     // '30%': { transform: 'rotate(14deg)' },
      //     // '60%': { transform: 'rotate(-8deg)' },
      //     // '100%': { transform: 'rotate(0.0deg)' },
      //     '0%': { fontSize: '1rem' },
      //     '50%': { fontSize: '2rem' },
      //     '100%': { fontSize: '1rem' },
      //   },
      // },
      // animation: {
      //   'waving-hand': 'wave 2s linear',
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
}
