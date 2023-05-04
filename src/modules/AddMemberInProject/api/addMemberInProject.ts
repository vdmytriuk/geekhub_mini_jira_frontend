import $host from "../../../http/host";
import {AppDispatch} from "../../../store/store";
import {getMembersProject} from "./getMembersProject";
import {baseRequest} from "../../../common/base/baseRequest";

export const addTaskRequest = (dispatch: AppDispatch, member: string, id: string) => {
    return baseRequest<any>(async () => {
        await $host.post(`/projects/${id}/add_member`, {email: member, projects_id: id});

        dispatch(getMembersProject(id))
    }, { title: "Done!", text: "Member added!" });
}


