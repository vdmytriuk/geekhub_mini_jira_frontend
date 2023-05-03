import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {LOCAL_STORAGE_USER_KEY} from "../../common/config/localStorage";

import {IUpdateUser, IUserProfile, IUserState} from "./types";

const initialState: IUserState = {
    id: null,
    email: '',
    first_name: '',
    last_name: "string",
    password: '',
    isAuth: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile(state, action: PayloadAction<IUserProfile>) {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        },
        updateUser(state, action: PayloadAction<IUpdateUser>) {
            return {
                ...state,
                ...action.payload,
            }
        },
        logout(state) {
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
            state.isAuth = false;
        }
    }
});

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice;