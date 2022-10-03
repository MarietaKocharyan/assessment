import { configureStore } from '@reduxjs/toolkit';

import identifySlice from './identity/user';

export const store = configureStore({
    reducer: {
        users: identifySlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
