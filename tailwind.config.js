module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      fontFamily:{
      ptSans: ['PT Sans', 'sans-serif'],
      nunito: ['Nunito', 'serif'],
      poppins: ['Poppins', 'serif'],
    },
    extend: {
      colors:{
        color1: '#F4F8F8',
        color2: '#AFDBDB',
        color3: '#9A4A53',
        color4: '#CFA2A5',
        color5: '#AE8484',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide:{
          '0%': { left: '180%' },
          '100%': { left: '100%' },
        }
      },
      backgroundImage: {
        'nosotros': "url('/src/images/quienesSomos.svg')",
        'us': "url('/src/images/us.png')",
      },
      screens: {
        'mw2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mwxl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'mwlg': {'max': '1023px'},

        'mnmg': {'min': '834px'},
        'mwmg': {'max': '834px'},
        // => @media (max-width: 1023px) { ... }
  
        'mwmd': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
        'xs': {'min': '350px'},
  
        'mwsm': {'max': '640px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
