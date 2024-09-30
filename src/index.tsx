import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store'; 
import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);