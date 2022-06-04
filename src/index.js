import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import GlobalStyle from './global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>
);
