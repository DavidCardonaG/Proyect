import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters'
import './style/app.css';
ReactDOM.render(
  <React.StrictMode>
    <AppRouters/>
  </React.StrictMode>,
  document.getElementById('root')
);

