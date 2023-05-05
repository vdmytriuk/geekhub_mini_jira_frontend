import {INewPasswordData} from "../types";
import {AppDispatch} from "../../../store/store";
import $host from "../../../http/host";

type AsyncRequest = (dispatch: AppDispatch) => Promise<void>;

interface RegisterUserResponse {
    exp: string;
    name: string;
    token: string;
}

export const newPasswordRequest = ({token, password}: INewPasswordData): AsyncRequest => {
    return async () => {
        try {

            await $host.post<RegisterUserResponse>('/reset_password', {
                token: token,
                password: password
            });

        } catch (e) {
            console.log(e);
        }
    }
}