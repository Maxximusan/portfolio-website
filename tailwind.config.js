/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
   

    extend: {

      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url('./images/1590125748_05-laptop-for-coding.jpg')",
        'hero-pattern2': "linear-gradient(to right, rgba(47, 48, 58, 0.61), rgba(47, 48, 58, 0.61)),url('./images/javascript.jpg')",
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
        '75': '300px',
        '90': '360px',
        '288': '18rem',
        '336': '21rem',
        '400': '25rem',
      },

      boxShadow: {
        'forProjects': '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
      },

      transitionProperty: {
        'visibility': 'visibility , opacity',
        
      },
      keyframes: {
        changeColorLP : {
          '0%' :  {
            color: '#ffff00'          
          },
          '30%': {
            color: '#f83016'           
          },
          '50%': {
            color: '#2cad12'                
          },
          '54%': {
            color: '#36f8e8'         
          },
          '57%': {
            color: '#2cad12'              
          },
          '60%': {
            color: '#36f8e8'         
          },
          '63%': {
            color: '#2cad12'                
          },
          '67%': {
            color: '#36f8e8'                
          },
          '70%': {
            color: '#2cad12'                 
          },
          '73%': {
            color: '#36f8e8'                
          },
          '77%': {
            color: '#2cad12'                
          },
          '80%': {
            color: '#36f8e8'       
          },
      
          '100%': {
            color: '#ffff00'          
          }
        },
        changeColorGit : {
          '0%' :  {
            color: '#2cad12'        
          },
          '30%': {
            color: '#36f8e8'           
          },
          '50%': {
            color: '#ffff00'                
          },
          '54%': {
            color: '#f83016'        
          },
          '57%': {
            color: '#ffff00'              
          },
          '60%': {
            color: '#f83016'           
          },
          '63%': {
            color: '#ffff00'                
          },
          '67%': {
            color: '#f83016'                 
          },
          '70%': {
            color: '#ffff00'                  
          },
          '73%': {
            color: '#f83016'                   
          },
          '77%': {
            color: '#ffff00'               
          },
          '80%': {
            color: '#f83016'          
          },
      
          '100%': {
            color: '#2cad12'        
          }
        } ,
      },

      animation: {
        changeGitColor: 'changeColorGit 10000ms 1000ms infinite',
        changeLPColor: 'changeColorLP 10000ms 1000ms infinite',
      },

      screens: {
        'min-mob': {'min': '320px', 'max': '479px'},
        'mob': '480px',
        'mobile': {'min': '480px', 'max': '767px'},
        'tabl': '768px',
        'tablet': {'min': '768px', 'max': '949px'},
        'tabl2': '950px',
        'tablet2': {'min': '950px', 'max': '1099px'},
        'min-desk': {'min': '1100px', 'max': '1279px'},
        'desktop': '1280px',
      },

      minHeight: {
        'test': 'calc(120px + 100vh)',
      }
      
    },
  },
  plugins: [],
}

