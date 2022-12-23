import React from 'react';

import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import { LaunchImageProps } from '@components/launch/launchImage/launchImageProps';

function LaunchImage({ imageUrl, missionName }: LaunchImageProps): JSX.Element {
  const DEFAULT_IMAGE = '/images/rocket.jpg';
  const image = imageUrl || DEFAULT_IMAGE;

  return (
    <Box height={0} paddingBottom="75%" pos="relative">
      <Image
        alt={missionName}
        height="full"
        left={0}
        objectFit="cover"
        pos="absolute"
        src={image}
        top={0}
        width="full"
      />
    </Box>
  );
}

export default LaunchImage;
