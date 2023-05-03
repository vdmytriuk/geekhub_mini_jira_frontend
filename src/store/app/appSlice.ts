import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IAppState, INotificationPayload} from "./types";

const initialState: IAppState = {
    isInitialAppLoaded: false,
    appNotificationTitle: "",
    appNotificationText: "",
    appNotificationVisible: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsAppLoaded(state) {
            state.isInitialAppLoaded = true;
        },
        setAppNotification(state, action: PayloadAction<INotificationPayload>) {
            state.appNotificationTitle = action.payload.title;
            state.appNotificationText = action.payload.text;
            state.appNotificationVisible = true;
        }
    }
});

export const {
    reducer: appReducer,
    actions: appActions
} = appSlice;