import React from 'react';

import HeaderWrapper from '../components/header/header';
import FooterWrapper from '../components/footer/footer';
import ContentWrapper from '../components/content/content';

import './style/index.module.scss';
import { Layout } from 'antd';

export default class LayoutWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout className="layout">
        <HeaderWrapper />
        <ContentWrapper />
        <FooterWrapper />
      </Layout>
    );
  }
}
