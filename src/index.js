import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
