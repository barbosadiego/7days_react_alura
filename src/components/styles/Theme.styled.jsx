import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    bgColor: '#f1f1f1',
    bgColor2: '#c4c4c4',
    darkGreen: '#213e26',
    black: '#202020',
    lightGreen: '#8dce97',
    yellow: '#ffcb47',
    white: '#ffffff',
  },
  boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06);',
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

export default Theme;
