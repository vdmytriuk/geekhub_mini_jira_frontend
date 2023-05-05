import $host from "../../http/host";

import {AppDispatch} from "../store";
import {userActions} from "./userSlice";

import {LOCAL_STORAGE_USER_KEY} from "../../common/config/localStorage";

import {IUserProfile} from "./types";

export const setUserProfile = () => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const user_token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

            if (!user_token) {
                dispatch(userActions.logout());
                return;
            }

            $host.defaults.headers.common['Authorization'] = `Bearer ${user_token}`;

            const resp = await $host.get<IUserProfile>(`/about_user?current_user=${user_token}`);

            const profile: IUserProfile = resp?.data;

            dispatch(userActions.setUserProfile(profile));
        } catch (e) {
            if (e.code === 401) {
                dispatch(userActions.logout());
            }

            console.log(e);
        }
    }
}