module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./*.html', './src/**/*.js'],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
      scale: ["group-hover"],
      overflow: ["group-hover"],
      translate: ["group-hover"]
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
