import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Main styles */
* {
  box-sizing: border-box;
} 

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Variables */
#canvas {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid black;
}
`;

//Theme
export const theme = {
  colors: {
    //Main
    btn: 'rgb(239, 239, 239)',
    btn__hover: '#ff9999',
    'btn-save': '#80bdff',
    'btn-save__hover': '#479cf9',
    //Navigation
    'btn__text-inittial': 'black',
    'btn-nav_hover': 'gray',
    'btn-nav_focused': 'gray',
    //Text Color after hover
    'btn-nav__text': '#fff',
    //Form Buttons
    'btn-submit': '#493',
    'btn-submit__text': '#fff',
    'btn-submit__hover': 'rgb(65, 173, 44)',
    //Tools
  },
};

export default GlobalStyle;
