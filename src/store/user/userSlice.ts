import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        }
    }
});

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice;