import $host from "../../../http/host";

import {IProject} from "../../../common/types";

import {projectsAction} from "../store";
import {AppDispatch} from "../../../store/store";


export const getProjectsRequest = () => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.get<IProject[]>('/projects');

            const projects = resp?.data;

            dispatch(projectsAction.setProjects(projects));
        } catch (e) {
            console.log(e);
        }
    }
}