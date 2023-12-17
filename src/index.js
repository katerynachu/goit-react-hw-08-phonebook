import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { store } from "./components/redux/store";
import { Provider } from "react-redux";


import {App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    black: '#212121',
    grey:'lightgray',
    white: '#fff',
    red: 'red',
    green: 'green',
    orange: 'orange',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
   <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>
  </ThemeProvider>

);
