/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
   

    extend: {

      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url('/images/1590125748_05-laptop-for-coding.jpg')",
        
      },

      colors:{
        h1: '#af4e0a',
        bgrImg: '#252222',
        border: '#f36421',
        bgrHead: '#87775bde',
        bgrBody: '#c5c5c5',
        bgrAbout: '#ffd87fb8',
        bgrPortfolio: '#a6d3b6',
        bgrContacts: '#bdb76b99',
        h2: '#228b22',
        bgrProjItem: '#c7b7a5',
        bgrProjItem2: '#bbb0d5',
        h4: '#0000ff',
        gitLink: '#0b7c14',
        telegram: 'rgb(4, 163, 255)',
      },

      fontFamily: {
        mons: ['Montserrat', 'monospace'],
        sans: ['Roboto', 'sans-serif'],
      },

      spacing: {
        '400': '25rem',
      },

      boxShadow: {
        'forProjects': '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
      },

      transitionProperty: {
        'visibility': 'visibility , opacity',
        
      }
    },
  },
  plugins: [],
}

