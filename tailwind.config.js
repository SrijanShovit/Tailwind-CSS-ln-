module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        srijan:{
          400:"#34D399"
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}

// extend means adding more custom things on top of tailwind