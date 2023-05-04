import $host from "../../../http/host";

import {userActions} from "../../../store/user";
import {AppDispatch} from "../../../store/store";

import {IUpdateUser} from "../types";
import {baseRequest} from "../../../common/base/baseRequest";

export const editUserRequest = (dispatch: AppDispatch, userId: number, {first_name, last_name}: IUpdateUser) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch<IUpdateUser>(`/users/${userId}`, {
            first_name: first_name,
            last_name: last_name
        });

        dispatch(userActions.updateUser({first_name, last_name}));
    }, { title: "Completed!", text: "User info edited!" });
}
