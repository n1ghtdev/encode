import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Button } from 'antd';

import AboutPage from '../pages/AboutPage';
import { EncryptForm, EncryptOutput } from '../pages/EncryptPage';
import { DecryptForm, DecryptOutput } from '../pages/DecryptPage';
import { EncryptRsaForm, EncryptRsaOutput } from '../pages/EncryptRsaPage';
import { DecryptRsaForm, DecryptRsaOutput } from '../pages/DecryptRsaPage';

import PageLayout from './PageLayout';
import Sidebar from './Sidebar';

// this app don't actually need global state implementation,
// it's easy to make it without one
// the main reason there is global state is to learn how to use useReducer hook
// with Context API to implement global state management
import { StoreProvider } from '../modules/GlobalStore';

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
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
      <Layout.Footer style={{ textAlign: 'center', marginTop: 'auto' }}>
        <Button
          type="link"
          href="https://github.com/n1ghtdev/"
          target="_blank"
          style={{ opacity: '.3', color: '#000' }}
        >
          github.com/n1ghtdev
        </Button>
      </Layout.Footer>
    </Layout>
  </Layout>
);

export default App;
