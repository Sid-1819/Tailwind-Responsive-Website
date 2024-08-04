/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF4F',
        'secondary': '#4D4D4D',
        'hero-bg':'#F5F7FA'
        
    },
    screens: {
      'ml': '375px',
  },
  
  plugins: [],
}
}
}

