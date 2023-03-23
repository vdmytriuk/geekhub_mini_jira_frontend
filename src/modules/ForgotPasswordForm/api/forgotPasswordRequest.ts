import {IForgotPasswordData} from "../types";
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

export const forgotPasswordRequest = ({email, password}: IForgotPasswordData): AsyncRequest => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.post<RegisterUserResponse>('/users', {
                email: email,
                password: password,
            });

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);
            dispatch(userActions.setUser({email, password}))
        } catch (e) {
            console.log(e);
        }
    }
}