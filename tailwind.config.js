/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./hugo_stats.json'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-light': 'rgb(var(--color-ink-light) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        olive: 'rgb(var(--color-olive) / <alpha-value>)',
        'olive-dark': 'rgb(var(--color-olive-dark) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Arial', 'sans-serif'],
        sans: ['"DM Sans"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
      },
    },
  },
  plugins: [],
}
