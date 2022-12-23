import React from 'react';

import { Box } from '@chakra-ui/layout';

import Header from '@components/header/Header';
import Launches from '@components/launches/Launches';

function LaunchLayout(): JSX.Element {
  return (
    <Box p={6}>
      <Header />
      <Launches />
    </Box>
  );
}

export default LaunchLayout;
