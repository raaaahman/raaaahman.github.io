module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        60: 'rgb(0 0 0 / 60%)',
        10: 'rgb(0 0 0 / 10 %)',
        12: 'rgb(0 0 0 / 12%)',
        4: 'rgb(0 0 0 / 4%)',
      },
      grey: {
        dark: '#15161A',
        400: '#656A7B',
        700: '#AAAEB9'
      },
      blue: {
        deeper: '#000588',
        deep: '#1c00a4'
      },
      purple: {
        bright: '#8504EA'
      },
      orange: {
        bright: '#CA6821'
      },
      white: {
        strong: '#ffffff',
        medium: 'rgb(255 255 255 / 80%)',
        weak: 'rgb(255 255 255 / 60%)',
        20: 'rgb(255 255 255 / 20%)',
        10: 'rgb(255 255 255 / 10%)',
        5: 'rgb(255 255 255 / 5%)',
      },
    },
    fontFamily: {
      sans: [ 'Inter', 'sans-serif' ]
    },
    extend: {
      boxShadow: {
        element: '0 8px 16px 0 rgba(0,0,0,0.6)'
      }
    }
  },
  darkMode: 'class',
}