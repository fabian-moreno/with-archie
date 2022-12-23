import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LaunchStoreType } from 'types/launchStoreType';

import getLaunches from '@redux/apis/launch/launchApi';

const initialState: LaunchStoreType = {
  launches: [],
  isLoading: false,
  searchBy: '',
};

export const getLaunchesData = createAsyncThunk(
  'launch/getLaunches',
  async (searchBy: string) => {
    const data: LaunchStoreType = {
      searchBy,
      launches: await getLaunches(searchBy),
      isLoading: false,
    };

    return data;
  }
);

export const launchSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setLaunches: (state, action: PayloadAction<LaunchStoreType>) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getLaunchesData.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
    }));
    builder.addCase(getLaunchesData.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setLaunches } = launchSlice.actions;

export default launchSlice.reducer;
