// Import required dependencies from React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux related dependencies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Middleware for handling async actions

// Import local files
import { reducers } from './reducers';
import App from './App';
import './index.css';

// Create Redux store with reducers and middleware
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Render the React application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // Mount the app to root element in HTML
);
