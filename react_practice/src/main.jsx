import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store.jsx/index.js";
import { Provider } from "react-redux";

const rootElement = /** @type {HTMLElement} */ (document.getElementById('root'));
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();


