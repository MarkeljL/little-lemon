import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <meta property='og:title' content='Little Lemon Restaurant'/>
      <meta property='og:url' content='https://littlelemonrestaurant.com'/>
      <meta property='og:image' content='https://littlelemonrestaurant.com/images/lemon.jpg'/>
      <meta property='og:description' content='The best medeterreritan restauroaurant in the town'/>
    </head>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
