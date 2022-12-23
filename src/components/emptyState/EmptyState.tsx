import React from 'react';
import Lottie from 'lottie-react';

import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';

import { useTranslations } from 'next-intl';

import animationData from '@animations/astronaut.json';

function EmptyState(): JSX.Element {
  const t = useTranslations('EmptyState');

  return (
    <Box margin="auto" maxW={500}>
      <Heading as="h1" size="lg" textAlign="center">
        {t('notFound')}
      </Heading>
      <Lottie animationData={animationData} />
    </Box>
  );
}

export default EmptyState;
