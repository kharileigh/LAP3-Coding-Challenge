import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import './styles/index.css';

reactDom.render(
              <Router>
                <React.StrictMode>
                <Provider store={store}>
                  <App />
                </Provider>
                </React.StrictMode>
              </Router>,
                document.getElementById('root'));
