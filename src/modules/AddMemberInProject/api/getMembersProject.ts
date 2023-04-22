import $host from "../../../http/host";
import {AppDispatch} from "../../../store/store";
import {membersProjectActions} from "../../../store/membersProject/membersProjectSlice";

export const getMembersProject = (id: string) => {

    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const response = await $host.get(`/projects/${id}`);

            const members = response?.data.member;
            console.log(members)
            dispatch(membersProjectActions.setMembers(members))

        } catch (e) {
            console.log(e);
        }
    }
}

