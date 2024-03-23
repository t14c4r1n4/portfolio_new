/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      // listStyleType: {
      //   none: 'none',
      //   disk: 'disk'
      // },
      fontFamily: {
        Orbitron: ['Orbitron'],
        Breve: ['Breve'],
        ProPixie: ['ProPixie'],
        Lixdu: ['Lixdu']
      },
    },
  },
  plugins: [],
}