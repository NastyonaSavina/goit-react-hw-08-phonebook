import React from 'react';
import ReactDOM from 'react-dom/client';


import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
  
);
