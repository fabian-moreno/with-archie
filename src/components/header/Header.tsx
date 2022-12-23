import React from 'react';

import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import { useTranslations } from 'next-intl';

import Toolbar from '@components/toolbar/Toolbar';

function Header(): JSX.Element {
  const t = useTranslations('Header');

  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      pt={4}
    >
      <Image
        alt={t('archie')}
        filter="invert(1)"
        height={10}
        mb={4}
        objectFit="contain"
        src="/images/archie.webp"
      />
      <Toolbar />
    </Box>
  );
}

export default Header;
