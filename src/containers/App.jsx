import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import AboutPage from '../pages/AboutPage';
import EncryptPage from '../pages/EncryptPage';
import EncryptRsaPage from '../pages/EncryptRsaPage';
import DecryptPage from '../pages/DecryptPage';
import DecryptRsaPage from '../pages/DecryptRsaPage';
import DashboardPage from '../pages/DashboardPage';

import Section from '../components/Section';

import PrivateRoute from './PrivateRoute';
import SidebarContainer from './SidebarContainer';
import StoreContext from '../store/StoreContext';
import AuthProvider from '../store/auth/AuthProvider';
import { getRequest } from '../utils/makeRequest';

toast.configure();

/* eslint-disable */
const App = () => {
  const { infoData } = useContext(StoreContext);

  const getInfoData = async () => {
    // sets loading of infoData to true
    infoData.requestInfoData();

    await getRequest('/api/get-data').then(data =>
      infoData.updateInfoData(data),
    );
  };

  useEffect(() => {
    getInfoData();
  }, []);

  return (
    <AuthProvider>
      <ToastContainer />
      <SidebarContainer />
      <Section Padding="25px 15px" bgColor="#F1F7FF">
        <Switch>
          <Route exact path="/" component={EncryptPage} />
          <Route exact path="/encrypt" component={EncryptPage} />
          <Route exact path="/decrypt" component={DecryptPage} />
          <Route exact path="/rsa-encrypt" component={EncryptRsaPage} />
          <Route exact path="/rsa-decrypt" component={DecryptRsaPage} />
          <Route exact path="/about" component={AboutPage} />
          <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </Section>
    </AuthProvider>
  );
};

export default App;
