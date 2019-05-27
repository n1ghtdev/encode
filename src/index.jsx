import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import './globalStyles.scss';
import GlobalStore from './store/GlobalStore';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <GlobalStore>
    <Router>
      <App />
    </Router>
  </GlobalStore>,
  MOUNT_NODE
);
