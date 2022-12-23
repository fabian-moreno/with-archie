import React from 'react';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import { store } from '@redux/store';

import archieTheme from '@theme/archieTheme';

function MyApp({ Component, pageProps }: AppProps<{ messages }>): JSX.Element {
  return (
    <ChakraProvider theme={archieTheme}>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
