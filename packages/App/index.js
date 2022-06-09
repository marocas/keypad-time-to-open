import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyle from './theme/global.styles';
import 'bootstrap/scss/bootstrap.scss'
import './theme/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = {
  breakpoint: {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1440px',
    xxl: '1920px',
  }
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  </React.StrictMode>
);
