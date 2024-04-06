/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        supercar: 'url(/images/supercar.png)',
        'signup-bg': 'url(/images/signup-bg.jpg)',
        'carlist-hero': 'url(/images/carlist-hero.png)',
        'fp-bg-car': 'url(/fp-bg-car.jpg)',
        ellipse: 'url(/images/ellipse.svg)',
        pattern: 'url(/images/pattern.png)',
      },
      colors: {
        overlay_bg: '#14111169',
        btn_blue: '#AACBED',
      },      
    },
    fontFamily: {
      smallHeadings: ["Italiana", "sans-serif"],
      bigHeadings: ["Gloock", "serif"],
    }
  },
  plugins: [],
};
