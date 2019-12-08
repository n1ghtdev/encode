import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { H1 } from '../components/Headings';
import A from '../components/A';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { Sider } = Layout;

const SidebarContainer = () => (
  <Sider width="250px" style={{ position: 'relative' }}>
    <Header>
      <H1 lineHeight="1" FontFamily="'Comfortaa', cursive" Color="#fff">
        encode
      </H1>
    </Header>
    <Menu mode="inline" theme="dark">
      <Menu.Item style={{ textTransform: 'uppercase' }}>
        <Link to="/encrypt">symmetric encrypt</Link>
      </Menu.Item>
      <Menu.Item style={{ textTransform: 'uppercase' }}>
        <Link to="/decrypt">symmetric decrypt</Link>
      </Menu.Item>
      <Menu.Item style={{ textTransform: 'uppercase' }}>
        <Link to="/rsa-encrypt">RSA encrypt</Link>
      </Menu.Item>
      <Menu.Item style={{ textTransform: 'uppercase' }}>
        <Link to="/rsa-decrypt">RSA decrypt</Link>
      </Menu.Item>
      <Menu.Item style={{ textTransform: 'uppercase' }}>
        <Link to="/about">about</Link>
      </Menu.Item>
    </Menu>
    <Footer style={{ textAlign: 'center', marginTop: 'auto' }}>
      <A
        Color="hsl(220, 50%, 25%)"
        href="https://github.com/n1ghtdev/"
        target="_blank"
        rel="noopener"
      >
        github.com/n1ghtdev
      </A>
    </Footer>
  </Sider>
);

export default SidebarContainer;
