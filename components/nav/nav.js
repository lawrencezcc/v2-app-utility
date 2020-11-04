import React from 'react';

import { Menu } from 'antd';

import NAV_CONFIG from './config/nav.config';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey: 'tfn',
      data: props.navData,
    };
  }

  render() {
    return (
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={this.state.defaultKey}
      >
        {(NAV_CONFIG || []).map((data) => (
          <Menu.Item key={data.key}>{data.value}</Menu.Item>
        ))}
      </Menu>
    );
  }
}
