import {ICreateProjectData} from "../types";
import $host from "../../../http/host";
import {AppDispatch} from "../../../store/store";
import {baseRequest} from "../../../common/base/baseRequest";


export const createProjectRequest = (dispatch: AppDispatch, project: ICreateProjectData) => {
    return baseRequest<any>(async () => {
        await $host.post('/projects', project)
    }, { title: "Done!", text: "Project created" });
}
