import { gql } from '@apollo/client';

import { LaunchesResponse } from 'types/launchesResponseType';
import { LaunchType } from 'types/launchType';

import client from '@redux/apis/client/client';
import normalizeLaunches from '@redux/apis/launch/launchHelper';
import getLaunchesQuery from '@redux/apis/launch/launchQuery';

let isLoading = false;

const getLaunchesData = async (word: string): Promise<LaunchType[]> => {
  isLoading = true;
  const { data } = await client.query<LaunchesResponse>({
    query: gql`
      ${getLaunchesQuery(word)}
    `,
  });
  isLoading = false;

  return normalizeLaunches(data);
};

const getLaunches = (word: string): Promise<LaunchType[]> => {
  if (!isLoading) {
    return getLaunchesData(word);
  }

  return new Promise<LaunchType[]>((resolve) => {
    setTimeout(() => resolve(getLaunches(word)), 300);
  });
};

export default getLaunches;
