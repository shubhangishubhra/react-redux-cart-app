// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Routes } from 'react-router-dom';

import App from './App';
import rootReducer from './reducers';
import ItemList from './components/ItemList';
import Cart from './components/Cart';

import './styles.css'; // Import the CSS file

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ItemList />} />
          </Route>
          <Route path="/my-cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
