import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './Body';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const head = ReactDOM.createRoot(document.getElementById('head'));
head.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById('body'));
body.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
