import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
        <App /> 
//   </React.StrictMode>

//  StrictMode cause the double logging, re-rendering of component 

// Strict Mode enables the following development-only behaviors:
// Your components will re-render an extra time to find bugs caused by impure rendering.
// Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
// Your components will be checked for usage of deprecated APIs.
// Reference: https://react.dev/reference/react/StrictMode 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
