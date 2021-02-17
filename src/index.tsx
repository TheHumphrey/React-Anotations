import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from './store';

import light from './styles/themes/light';

import GlobalStyle from './styles/global';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
