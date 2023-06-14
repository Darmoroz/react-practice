import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
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
img {
  display: block;
  height: auto;
  /* width:100%; */
} 

.text__right{
  text-align: right;
}

ul,
ol,
p,
h1,
h2,
h3 {
  list-style: none;
  margin: 0;
  padding: 0;
}
@keyframes sale {
  0% {
    color: red;
  }
  30% {
    color: green;
  }
  70% {
    color: blue;
  }
}

.sale {
  font-size: 50px;
  font-weight: 700;
  animation: sale 1s ease-in-out infinite;
}

.formik{
  display: grid;
 grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
   grid-row-gap: 1em;
  
}`;
