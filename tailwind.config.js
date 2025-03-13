/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        'primary-light': 'rgb(var(--primary-light))',
        accent: 'rgb(var(--accent))',
      },
      backgroundColor: {
        'primary-gradient': 'linear-gradient(135deg, rgba(var(--primary), 0.1) 0%, rgba(var(--primary-light), 0.2) 100%)',
      },
    },
  },
  plugins: [],
}
