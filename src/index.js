import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/styles.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
