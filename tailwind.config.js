/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
    },
    screens: {
      xs: '320px',
      sm: '400px',
      md: '650px',
      lg: '820px',
      xl: '1020px',
      xxl: '1220px',
      // 'sx': { 'min': '320px', 'max': '400px' },
      // 'sm': { 'min': '400px', 'max': '520px' },
      // 'md': { 'min': '520px', 'max': '768px' },
      // 'lg': { 'min': '768px', 'max': '1024px' },
      // 'xl': { 'min': '1024px', 'max': '1200px' },
      // '2xl': { 'min': '1200px' },
    },
    extend: {
      backgroundImage: {
        'berlin': "url('/components/assets/berlin.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '12': 'repeat(12, 50px)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "secondary": "#b7e060",
          "accent": "#8fef8d",
          "neutral": "#064e3b",
          "base-100": "#000000",
          "info": "#5EBEE4",
          "success": "#1AA24C",
          "warning": "#FCAC3B",
          "error": "#F3445E",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
