import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './containers/App';
import GlobalStore from './store/GlobalStore';

import './globalStyles.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <GlobalStore>
    <Router>
      <App />
    </Router>
  </GlobalStore>,
  MOUNT_NODE,
);
