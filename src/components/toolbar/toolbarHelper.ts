import { UrlObject } from 'url';

const getUrl = (pathname: string, value: string): UrlObject => {
  const url: UrlObject = { pathname };

  if (value) {
    url.query = { q: value };
  }

  return url;
};

export default getUrl;
