import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LOCAL_STORAGE_USER_KEY} from "../../common/config/localStorage";

export interface IUserState {
    email: string;
    password: string;
    isAuth?: boolean;
}

const initialState: IUserState = {
    email: '',
    password: '',
    isAuth: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUserState>) {
            return {
                ...action.payload,
                isAuth: true
            }
        },
        initUser(state) {
            const user_token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

            if (user_token) {
                state.isAuth = true;
            }
        }
    }
});

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice;