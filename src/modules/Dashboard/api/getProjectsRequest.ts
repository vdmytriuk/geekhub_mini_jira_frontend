import $host from "../../../http/host";

import { IProject } from "../../../common/types";

import { projectsAction } from "../store";
import { AppDispatch } from "../../../store/store";

import { baseRequest } from "../../../common/base/baseRequest";

export const getProjectsRequest = (dispatch: AppDispatch) => {
    return baseRequest<IProject[]>(async () => {
        const resp = await $host.get<IProject[]>('/projects');
        const projects = resp?.data;

        dispatch(projectsAction.setProjects(projects));

        return projects;
    });
}