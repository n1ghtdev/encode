import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'antd';

import AboutPage from '../pages/AboutPage';
import { EncryptForm, EncryptOutput } from '../pages/EncryptPage';
import { DecryptForm, DecryptOutput } from '../pages/DecryptPage';
import { EncryptRsaForm, EncryptRsaOutput } from '../pages/EncryptRsaPage';
import { DecryptRsaForm, DecryptRsaOutput } from '../pages/DecryptRsaPage';
// import DecryptPage from '../pages/DecryptPage';
import PageLayout from './PageLayout';

import { StoreProvider } from '../modules/GlobalStore';

import Sidebar from './Sidebar';
// import MobileMenu from './MobileMenu';

toast.configure();
const redirectToMainPage = (nextState, replace, callback) => {
  replace(null, '/firstPage');

  if (callback) {
    callback();
  }
};
const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <ToastContainer />
    <Sidebar />
    <Layout>
      <StoreProvider>
        <Layout.Content style={{ margin: '25px' }}>
          <Switch>
            <Redirect exact from="/" to="encrypt" />
            <Route
              exact
              path="/encrypt"
              render={() => (
                <PageLayout
                  inputForm={<EncryptForm />}
                  outputForm={<EncryptOutput />}
                />
              )}
            />
            <Route
              exact
              path="/decrypt"
              render={() => (
                <PageLayout
                  inputForm={<DecryptForm />}
                  outputForm={<DecryptOutput />}
                />
              )}
            />
            <Route
              exact
              path="/rsa-encrypt"
              render={() => (
                <PageLayout
                  inputForm={<EncryptRsaForm />}
                  outputForm={<EncryptRsaOutput />}
                />
              )}
            />
            <Route
              exact
              path="/rsa-decrypt"
              render={() => (
                <PageLayout
                  inputForm={<DecryptRsaForm />}
                  outputForm={<DecryptRsaOutput />}
                />
              )}
            />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Layout.Content>
      </StoreProvider>
    </Layout>
  </Layout>
);

export default App;
