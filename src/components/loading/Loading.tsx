import React from 'react';

import { Box } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/react';

function Loading(): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" mt={200}>
      <CircularProgress
        isIndeterminate
        color="blue.300"
        size="4rem"
        trackColor="transparent"
      />
    </Box>
  );
}

export default Loading;
