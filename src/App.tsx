import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  </Provider>
);

export default App;
