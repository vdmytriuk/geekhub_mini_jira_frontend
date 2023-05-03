import $host from "../../../http/host";

import {IProject} from "../../../common/types";

import {projectsAction} from "../store";
import {AppDispatch} from "../../../store/store";
import {appActions} from "../../../store/app";


export const getProjectsRequest = () => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.get<IProject[]>('/projects');

            const projects = resp?.data;

            dispatch(projectsAction.setProjects(projects));
            dispatch(appActions.setAppNotification({title: "test", text: "text"}))
        } catch (e) {
            console.log(e);
        }
    }
}