import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProgress, IProgressState} from "./types";


const initialState: IProgressState = {
   width: 0
};
export const userSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        setProgress(state, action: PayloadAction<IProgress>) {
            return {
                ...action.payload,
                isAuth: true
            }
        },
    }
});


export const {
    reducer: progressReducer,
    actions: progressActions
} = userSlice;