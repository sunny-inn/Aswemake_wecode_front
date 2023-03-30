import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import Globalstyle from './Styles/Globalstyle';
import theme from './Styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Globalstyle />
    <Router />
  </ThemeProvider>
);
