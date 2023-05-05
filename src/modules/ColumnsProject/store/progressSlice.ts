import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProgress, IProgressState} from "./types";


const initialState: IProgressState = {
   width: 0
};
export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        setProgress(state, action: PayloadAction<IProgress>) {
            return {
                ...action.payload
            }
        },
    }
});


export const {
    reducer: progressReducer,
    actions: progressActions
} = progressSlice;