import {ICreateProjectData} from "../types";
import $host from "../../../http/host";
import {AppDispatch} from "../../../store/store";
import {projectsAction} from "../../Dashboard";


export const editProjectRequest = (editProject: ICreateProjectData, id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.patch(`/projects/${id}`, editProject);

            const project = resp?.data

            dispatch(projectsAction.setEditProject(project))

        } catch (e) {
            console.log(e);
        }
    }
}
