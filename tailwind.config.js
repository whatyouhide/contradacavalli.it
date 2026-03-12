/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./hugo_stats.json'],
  theme: {
    extend: {
      colors: {
        bg: '#ebe4d9',
        paper: '#f9f5ee',
        ink: '#171513',
        'ink-light': '#2e2b27',
        muted: '#6c655d',
        line: 'rgba(23, 21, 19, 0.12)',
        olive: '#4f5a38',
        'olive-dark': '#3e4a2b',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Arial', 'sans-serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
      },
    },
  },
  plugins: [],
}
