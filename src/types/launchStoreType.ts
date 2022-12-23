import { LaunchType } from 'types/launchType';

export interface LaunchStoreType {
  launches: LaunchType[];
  isLoading: boolean;
  searchBy: string;
}
