import React from 'react';
import Head from 'next/head';

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
        <Head>
          <title>TFN generator</title>
          <link rel="canonical" href="https://www.helperutility.com/" />
          <meta
            name="keywords"
            content="Tax file number generator, tfn generator"
          />
          <meta
            name="description"
            content="Australian Tax file number generator is a free web utility tool for generating TFN."
          ></meta>
          <meta property="og:title" content="TFN generator" />
          <meta
            property="og:title"
            content="Tax file number generator, tfn generator"
          />
          <meta
            property="og:description"
            content="Australian Tax file number generator is a free web utility tool for generating TFN."
          />
          <meta property="og:url" content="https://www.helperutility.com/" />
          <meta property="og:site_name" content="TFN generator" />
        </Head>
        <HeaderWrapper />
        <ContentWrapper />
        <FooterWrapper />
      </Layout>
    );
  }
}
