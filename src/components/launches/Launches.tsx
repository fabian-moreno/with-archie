import React from 'react';

import { SimpleGrid } from '@chakra-ui/layout';

import { LaunchType } from 'types/launchType';

import EmptyState from '@components/emptyState/EmptyState';
import Launch from '@components/launch/Launch';
import Loading from '@components/loading/Loading';

import { useAppSelector } from '@redux/hooks';
import launchSelector from '@redux/selectors/launch/launchSelector';

function Launches(): JSX.Element {
  const launchData = useAppSelector(launchSelector);
  const { launches, isLoading } = launchData;

  if (isLoading) {
    return <Loading />;
  }

  if (!launches?.length) {
    return <EmptyState />;
  }

  const launchesEl = launches.map((launch: LaunchType) => (
    <Launch key={launch.missionName} launch={launch} />
  ));

  return (
    <SimpleGrid
      columns={[1, null]}
      justifyContent="center"
      minChildWidth="20rem"
      spacing="4"
      templateColumns={{
        base: 'repeat(auto-fit, minmax(100%, 1fr))',
        md: 'repeat(auto-fit, minmax(20rem, 0fr))',
      }}
    >
      {launchesEl}
    </SimpleGrid>
  );
}

export default Launches;
