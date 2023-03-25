import $host from "../../../http/host";

import {LOCAL_STORAGE_USER_KEY} from "../../../common/config/localStorage";

import {IUserLoginData} from "../types";

import {userActions} from "../../../store/user";
import {AppDispatch} from "../../../store/store";

type AsyncRequest = (dispatch: AppDispatch) => Promise<void>;

interface IUserAuthResponse {
    exp: string;
    name: string;
    token: string;
}

export const authUserRequest = ({email, password}: IUserLoginData): AsyncRequest => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.post<IUserAuthResponse>('/login', {email, password});

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);

            dispatch(userActions.setUser({email, password}))
        } catch (e) {
            console.log(e);
        }
    }
}