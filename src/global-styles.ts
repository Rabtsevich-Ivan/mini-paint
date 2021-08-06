import styled, { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

/* Variables */
:root {
  --btn: rgb(239, 239, 239);
  --btn__hover: lightgray;
  --btn-save: #80bdff;
  --btn-save__hover: #479cf9;
  --btn-nav: gray;
  --btn-nav__text: #fff;
  --btn-nav__text-ini: black;
  --btn-submit: #493;
  --btn-submit__hover: rgb(65, 173, 44);
}
#canvas {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid black;
}
`;

//Utility
export const Btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: 0;
  outline: 0;
  border: 0;
  width: 100%;
  border-radius: 0;
  text-decoration: none;
  padding: 0.5rem;
`;

//Forms
export const BasicMainForm = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
export const BasicFormWrapper = css`
  min-width: 400px;
  padding: 2rem;
  border: 1px solid rgb(204, 198, 198);
  border-radius: 5px;
  line-height: 1.8;
  font-size: 1.1rem;
`;

export const FormTitle = styled.h1`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;
export const FormGroupLabel = styled.label`
  font-size: 20px;
`;
export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.7rem 0.9rem;
  outline: none;
  border: 1px solid rgb(204, 198, 198);
  &:focus {
    border: 1px solid rgb(65, 173, 44);
  }
`;

export const FormError = styled.p`
  color: #bf1650;
  margin-top: 5px;
  margin-bottom: 5px;
  &::before {
    display: inline;
    content: '⚠ ';
  }
`;

export default GlobalStyle;
