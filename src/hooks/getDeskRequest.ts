import $host from "../http/host";
import {AppDispatch} from "../store/store";
import {projectActions} from "../store/project/projectSlice";
import {IDesk} from "../store/project/types";
import {baseRequest} from "../common/base/baseRequest";


export const getDesksRequest = (dispatch: AppDispatch, id: number) => {
    return baseRequest<any>(async () => {
        const response = await $host.get<IDesk>(`/projects/${id}/desks/${id}`);

        const project = response?.data;
        dispatch(projectActions.setProject(project))
    }, { title: "Project loaded", text: "" });
}
