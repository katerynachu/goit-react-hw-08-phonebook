import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import { persistor } from './components/redux/store';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    black: '#212121',
    grey: 'lightgray',
    white: '#fff',
    red: 'red',
    green: 'green',
    orange: 'orange',
    lightBlue:'#cbe6ef',
    blue:'#1976d2'
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: (value) => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);