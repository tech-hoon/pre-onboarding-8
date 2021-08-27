import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
