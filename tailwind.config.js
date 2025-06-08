// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tailwinds default breakpoints
      screens: {
        sm: '640px',   // små tablets
        md: '768px',   // store tablets
        lg: '1024px',  // små laptops
        xl: '1280px',  // store laptops
        '2xl': '1536px', // store skjermer
      },
      colors: {
        beige: '#f5f5dc',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};