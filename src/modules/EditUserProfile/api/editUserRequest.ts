import $host from "../../../http/host";

import {userActions} from "../../../store/user";
import {AppDispatch} from "../../../store/store";

import {IUpdateUser} from "../types";

export const editUserRequest = (userId: number, {first_name, last_name}: IUpdateUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.patch<IUpdateUser>(`/users/${userId}`, {
                first_name: first_name,
                last_name: last_name
            });

            dispatch(userActions.updateUser({first_name, last_name}));
        } catch (e) {
            console.log(e);
        }
    }
}
