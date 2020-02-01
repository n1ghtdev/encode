import React from 'react';
import { Switch, Route, Redirect, Link, useLocation } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { jsx, css } from '@emotion/core';

import Container from './Container';
import Menu from './Menu';
import Intro from './Intro';

import AboutPage from '../pages/AboutPage';
import { EncryptForm, EncryptOutput } from '../pages/EncryptPage';
import { DecryptForm, DecryptOutput } from '../pages/DecryptPage';
import { EncryptRsaForm, EncryptRsaOutput } from '../pages/EncryptRsaPage';
import { DecryptRsaForm, DecryptRsaOutput } from '../pages/DecryptRsaPage';

import PageLayout from './PageLayout';
import Sidebar from './Sidebar';

import { StoreProvider } from '../modules/GlobalStore';

const App = () => {
  const { pathname } = useLocation();

  return (
    <Layout
      css={theme => ({ backgroundColor: theme.background, height: '100vh' })}
    >
      <Layout.Sider
        width="250px"
        breakpoint="sm"
        collapseWidth="0"
        css={theme => ({ backgroundColor: theme.bright })}
      >
        <Menu>
          <Menu.Item to="/encrypt">symmetric encryption</Menu.Item>
          <Menu.Item to="/decrypt">symmetric decryption</Menu.Item>
          <Menu.Item to="/rsa-encrypt">RSA encryption</Menu.Item>
          <Menu.Item to="/rsa-decrypt">RSA decryption</Menu.Item>
        </Menu>
      </Layout.Sider>
      <StoreProvider>
        <Container>
          <Intro />
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
        </Container>
      </StoreProvider>
    </Layout>
  );
};

export default App;
