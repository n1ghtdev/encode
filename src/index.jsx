import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './globalStyles.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App />,
  MOUNT_NODE
);

// import makeRequest from './assets/js/makeRequest';
// import { modalControlInit, openModal } from './assets/js/modalControl';
// import tabControls from './assets/js/tabControls';
// import './assets/scss/root.scss';

// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.loader').classList.add('loader--out');
//   setTimeout(() => {
//     document.body.removeChild(document.querySelector('.loader'));
//   }, 500);
// });

// const encrypt = async (e) => {
//   e.preventDefault();
//   const body = {
//     text: document.getElementById('encryptText').value,
//     algorithm: document.getElementById('encryptAlgo').value,
//     encodingFrom: document.getElementById('encryptEncodeFrom').value,
//     encodingTo: document.getElementById('encryptEncodeTo').value,
//   };
//   const response = await makeRequest('/api/encrypt', 'post', body);
//   console.log(response);
//   openModal('encrypt-modal', response);
//   document.getElementById('encryptedText').value = response.crypted;
//   document.getElementById('encryptedIVKey').value = response.ivHex;
//   document.getElementById('encryptedKey').value = response.keyHex;
// };

// const decrypt = async () => {
//   const response = await makeRequest('/api/decrypt', 'post', {
//     text: document.getElementById('decryptText').value,
//     algorithm: document.getElementById('decryptAlgo').value,
//     decodingFrom: document.getElementById('decryptEncodeFrom').value,
//     decodingTo: document.getElementById('decryptEncodeTo').value,
//     key: document.getElementById('decryptKey').value,
//     iv: document.getElementById('decryptIV').value,
//   });
//   console.log(response);
//   openModal('decrypt-modal');
//   document.getElementById('decryptedText').value = response.decrypted;
// };


// document.getElementById('encrypt-btn').addEventListener('click', encrypt);
// document.getElementById('decrypt-btn').addEventListener('click', decrypt);

// tabControls();
// modalControlInit();


