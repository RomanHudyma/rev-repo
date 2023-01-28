import Head from 'next/head';
import * as React from 'react';

const HeadComponent: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadComponent;
