import React from 'react';
import ReactDOM from 'react-dom/client';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import { store, persistor } from './redux/store';

import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
          <ToastContainer />
        </BrowserRouter>

    </PersistGate>
  </Provider>,
  
);
