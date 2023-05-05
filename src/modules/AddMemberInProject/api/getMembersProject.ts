import $host from "../../../http/host";

import {AppDispatch} from "../../../store/store";
import {membersProjectActions} from "../../MembersInProject/store/membersProjectSlice";

export const getMembersProject = (id: string) => {

    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const response = await $host.get(`/projects/${id}`);

            const memberships = response?.data.memberships;
            dispatch(membersProjectActions.setMembers(memberships))

        } catch (e) {
            console.log(e);
        }
    }
}

