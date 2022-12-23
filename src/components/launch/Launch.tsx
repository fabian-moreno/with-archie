import React from 'react';

import { Box, Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import LaunchHeader from '@components/launch/launchHeader/LaunchHeader';
import LaunchImage from '@components/launch/launchImage/LaunchImage';
import { LaunchProps } from '@components/launch/launchProps';

function Launch({ launch }: LaunchProps): JSX.Element {
  const { missionName, imageUrl, rocketName, launchSite } = launch;

  return (
    <Box
      bg="gray.50"
      borderRadius="lg"
      boxShadow="md"
      maxW={{ md: '20rem' }}
      overflow="hidden"
      w="full"
    >
      <LaunchImage imageUrl={imageUrl} missionName={missionName} />

      <Box px={4} py={6}>
        <LaunchHeader launch={launch} />

        <Stack>
          <Text color="blackAlpha.600" fontSize="md" mb={1}>
            {rocketName}
          </Text>
          <Text color="blackAlpha.800" fontSize="sm">
            {launchSite}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Launch;
