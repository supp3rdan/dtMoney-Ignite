import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { App } from './App';

//const root = ReactDOM.createRoot(
//  document.getElementById('root') as HTMLElement
//);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);