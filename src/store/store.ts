import { configureStore } from '@reduxjs/toolkit';
import {appPopUpReducer} from './appPopUpSlice.ts';

export const store = configureStore({
    reducer: {
        appPopUp: appPopUpReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
