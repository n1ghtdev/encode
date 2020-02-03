/** @jsx jsx */
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { jsx, css } from "@emotion/core";

import Container from "./Container";
import Menu from "./Menu";
import Intro from "./Intro";

import AboutPage from "../pages/AboutPage";
import { EncryptForm, EncryptOutput } from "../pages/EncryptPage";
import { DecryptForm, DecryptOutput } from "../pages/DecryptPage";
import { EncryptRsaForm, EncryptRsaOutput } from "../pages/EncryptRsaPage";
import { DecryptRsaForm, DecryptRsaOutput } from "../pages/DecryptRsaPage";

import PageLayout from "./PageLayout";

import { StoreProvider } from "../modules/GlobalStore";

const App = () => {
  return (
    <Layout
      css={theme => css`
        background-color ${theme.background};
        min-height: 100vh;
      `}
    >
      <Layout.Sider
        width="250px"
        breakpoint="lg"
        collapsedWidth="0"
        css={theme => css`
          background-color: ${theme.bright};
        `}
        zeroWidthTriggerStyle={{
          top: "5px",
          position: "fixed",
          left: "0",
          backgroundColor: "#121212"
        }}
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
