import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Typography } from 'antd';

const { Sider, Header, Content } = Layout;

const SidebarContainer = () => (
  <Sider
    breakpoint="sm"
    width="250px"
    style={{ zIndex: '999' }}
    collapsedWidth="0"
  >
    <Typography.Title
      level={1}
      style={{
        fontFamily: 'Comfortaa, cursive',
        color: '#fff',
        lineHeight: '1',
        marginTop: '15px',
        textAlign: 'center',
      }}
    >
      encode
    </Typography.Title>
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
  </Sider>
);

export default SidebarContainer;
