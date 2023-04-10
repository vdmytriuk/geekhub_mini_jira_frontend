import {ICreateProjectData} from "../types";
import $host from "../../../http/host";


export const createProjectRequest = async (project: ICreateProjectData) => {
    try {
        await $host.post('/projects', project);
    } catch (e) {
        console.log(e);
    }
}
