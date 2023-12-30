import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <BrowserRouter>
 <HashRouter>
  <App/>
  </HashRouter>
// </BrowserRouter> 
);

