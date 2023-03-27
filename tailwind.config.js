module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    }
  },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  fontFamily: {
    sans: ['Graphik','sans-serif'],
    serif: ['Merriweather','serif']
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
