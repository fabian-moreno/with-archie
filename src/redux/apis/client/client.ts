import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

const retryLink: RetryLink = new RetryLink({
  delay: {
    initial: 2000,
  },
  attempts: {
    max: 3,
  },
});

const httpLink: HttpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const link: ApolloLink = ApolloLink.from([retryLink, httpLink]);

const cache: InMemoryCache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache,
});

export default client;
