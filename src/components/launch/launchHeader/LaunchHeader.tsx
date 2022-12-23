import React from 'react';

import { LinkIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { Heading, Link } from '@chakra-ui/react';

import { LaunchHeaderProps } from '@components/launch/launchHeader/launchHeaderProps';

function LaunchHeader({ launch }: LaunchHeaderProps): JSX.Element {
  const { missionName, linkUrl, rocketName } = launch;
  const defaultColor = 'blackAlpha.800';

  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Heading as="h2" color={defaultColor} pr="2" size="md">
        {missionName}
      </Heading>
      <Box>
        <Link display="block" href={linkUrl} target="_blank" title={rocketName}>
          <LinkIcon color={defaultColor} m={2} />
        </Link>
      </Box>
    </Box>
  );
}

export default LaunchHeader;
