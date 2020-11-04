import React from 'react';

import { Menu, Tooltip } from 'antd';

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
    const color = '#108ee9';
    const promptComingSoon = 'Coming Soon...';
    return (
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={this.state.defaultKey}
      >
        {(NAV_CONFIG || []).map((data) => (
          <Menu.Item key={data.key}>
            {data.key === 'tfn' ? (
              data.value
            ) : (
              <Tooltip title={promptComingSoon} color={color}>
                <span>{data.value}</span>
              </Tooltip>
            )}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
