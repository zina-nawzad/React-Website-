/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0E2036",
        "dark-secondary": "#FFFFFF",
        "dark-tertiary": "#1FB6D8",

        "light-primary": "#CFCFCF",
        "light-secondary": "#0E2036",
        "light-tertiary": "#1FB6D8",

      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        Rabar: ['Rabar', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}
