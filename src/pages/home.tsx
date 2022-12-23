import React, { useEffect, useState } from 'react';

import { GetServerSidePropsContext, GetStaticPropsResult } from 'next';

import { SlugProps } from 'types/slugProps';

import LaunchLayout from '@layouts/LaunchLayout';

import getLaunches from '@redux/apis/launch/launchApi';
import { useAppDispatch } from '@redux/hooks';
import { setLaunches } from '@redux/slices/launch/launchSlice';

function HomePage({ data }: SlugProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    dispatch(setLaunches(data));
    setHasInitialized(true);
  }, []);

  return hasInitialized ? <LaunchLayout /> : null;
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext): Promise<GetStaticPropsResult<SlugProps>> {
  const searchBy = (query?.q as string) ?? '';

  return {
    props: {
      pageID: 'home',
      messages: (await import(`/messages/${locale}.json`)).default,
      data: {
        launches: await getLaunches(searchBy),
        searchBy,
        isLoading: false,
      },
    },
  };
}

export default HomePage;
