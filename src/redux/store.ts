import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { launchSlice } from '@redux/slices/launch/launchSlice';

export const store = configureStore({
  reducer: {
    [launchSlice.name]: launchSlice.reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
