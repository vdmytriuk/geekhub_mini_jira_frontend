import {IUserRegisterData} from "../types";
import {$unAuthHost} from "../../../http/host";
import {LOCAL_STORAGE_USER_KEY} from "../../../common/config/localStorage";


interface RegisterUserResponse {
    exp: string;
    name: string;
    token: string;
}

export const registerUserRequest = async ({firstName, lastName, email, password}: IUserRegisterData) => {
    try {
        const resp = await $unAuthHost.post<RegisterUserResponse>('/users', {
            name: firstName,
            last_name: lastName,
            email,
            password
        });
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, resp.data.token);
        return resp;
    } catch (e) {
        console.log(e)
    }
}