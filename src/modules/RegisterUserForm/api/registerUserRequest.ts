import {IUserRegisterData} from "../types";
import {LOCAL_STORAGE_USER_KEY} from "../../../common/config/localStorage";
import {AppDispatch} from "../../../store/store";
import $host from "../../../http/host";
import {setUserProfile} from "../../../store/user/operation";
import {baseRequest} from "../../../common/base/baseRequest";


interface RegisterUserResponse {
    exp: string;
    name: string;
    token: string;
}

export const registerUserRequest = (dispatch: AppDispatch, {firstName, lastName, email, password}: IUserRegisterData) => {
    return baseRequest<any>(async () => {
        const resp = await $host.post<RegisterUserResponse>('/users', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            "github_token": "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",
        });

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);

        dispatch(setUserProfile());
    }, { title: "Welcome !", text: "Register success" });
}