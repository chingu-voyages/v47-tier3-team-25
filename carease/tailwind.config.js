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
      },
      colors: {
        overlay_bg: '#14111169',
        btn_blue: '#AACBED',
      },
    },
  },
  plugins: [],
};
