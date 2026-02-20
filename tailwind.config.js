/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0F',
        accent: '#E50914',
        premium: '#00C2FF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 25px rgba(229,9,20,0.35)',
        premium: '0 0 30px rgba(0,194,255,0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(229,9,20,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(0,194,255,0.2), transparent 40%), linear-gradient(180deg,#0B0B0F,#09090c)'
      }
    }
  },
  plugins: []
};
