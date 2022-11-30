import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import pngBackground from './assets/Vector.png';
import Theme from './components/styles/Theme.styled';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  font-family: 'Elsie Swash Caps', cursive;
}

p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

button {
  cursor: pointer;
  border: none;
}

#root {
  background-image: url(${pngBackground});
  background-repeat: no-repeat;
  background-position: top right;
  /* overflow: hidden; */
  @media screen and (max-width: 820px) {
    background-image: unset;
  }
}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
);
