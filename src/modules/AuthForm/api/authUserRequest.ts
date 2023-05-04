import $host from "../../../http/host";

import {LOCAL_STORAGE_USER_KEY} from "../../../common/config/localStorage";

import {IUserLoginData} from "../types";

import {AppDispatch} from "../../../store/store";
import {setUserProfile} from "../../../store/user/operation";
import {baseRequest} from "../../../common/base/baseRequest";

interface IUserAuthResponse {
    exp: string;
    name: string;
    token: string;
}

export const authUserRequest = (dispatch: AppDispatch, {email, password}: IUserLoginData) => {
    return baseRequest<any>(async () => {
        const resp = await $host.post<IUserAuthResponse>('/login', {email, password});

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);

        dispatch(setUserProfile());
    }, { title: "Hello!", text: "Lets work" });
}