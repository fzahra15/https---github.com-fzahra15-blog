import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/login.css';
import './css/style.css';
import { setupStore } from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
