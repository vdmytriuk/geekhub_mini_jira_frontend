import jwt_decode from "jwt-decode";

import {IUserRegisterData} from "../types";
import {LOCAL_STORAGE_USER_KEY} from "../../../common/config/localStorage";
import {AppDispatch} from "../../../store/store";
import {userActions} from "../../../store/user";
import $host from "../../../http/host";

type AsyncRequest = (dispatch: AppDispatch) => Promise<void>;

interface RegisterUserResponse {
    exp: string;
    name: string;
    token: string;
}

export const registerUserRequest = ({firstName, lastName, email, password}: IUserRegisterData): AsyncRequest => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.post<RegisterUserResponse>('/users', {
                name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            });

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);

            const decoded: { user_id: number } = jwt_decode(resp.data.token);
            dispatch(userActions.setUser({email, password, id: decoded.user_id}))
        } catch (e) {
            console.log(e);
        }
    }
}