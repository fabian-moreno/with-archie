import { LaunchStoreType } from 'types/launchStoreType';

import { RootState } from '@redux/store';

const launchSelector = (state: RootState): LaunchStoreType => state.launches;

export default launchSelector;
