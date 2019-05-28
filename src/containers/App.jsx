import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import EncryptPage from '../pages/EncryptPage';
import EncryptRsaPage from '../pages/EncryptRsaPage';
import DecryptPage from '../pages/DecryptPage';
import DecryptRsaPage from '../pages/DecryptRsaPage';
import SidebarContainer from './SidebarContainer';
import Section from '../components/Section';
import { getRequest } from '../utils/makeRequest';
import StoreContext from '../store/StoreContext';

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
    <>
      <SidebarContainer />
      <Section Padding="25px 15px" bgColor="#F1F7FF">
        <Switch>
          <Route exact path="/encrypt" component={EncryptPage} />
          <Route exact path="/decrypt" component={DecryptPage} />
          <Route exact path="/rsa-encrypt" component={EncryptRsaPage} />
          <Route exact path="/rsa-decrypt" component={DecryptRsaPage} />
        </Switch>
      </Section>
    </>
  );
};

export default App;
