import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { SlugProps } from 'types/slugProps';

import Home, { getServerSideProps } from '@pages/home';

const Main: NextPage = ({ data }: SlugProps): JSX.Element => (
  <div>
    <Head>
      <title>Archie, Space X</title>
      <meta content="Archie, space x, launches" name="description" />
      <link href="/images/favicon.ico" rel="icon" />
    </Head>
    <main>
      <Home data={data} />
    </main>
  </div>
);

export default Main;
export { getServerSideProps };
