import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as StyledTheme } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyle from './theme/global.styles';
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
    <StyledTheme theme={theme}>
      <GlobalStyle />
      <Layout />
    </StyledTheme>
  </React.StrictMode>
);
