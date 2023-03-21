import $host from "../../../http/host";

import {IUserLoginData} from "../types";

export const authUserRequest = async ({email, password}: IUserLoginData): Promise<void> => {
    const resp = await $host.post('/login', {email, password});

    console.log(resp);
}