import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUserState {
    isAuth: boolean;
}

const initialState: IUserState = {
    isAuth: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    }
});

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice;