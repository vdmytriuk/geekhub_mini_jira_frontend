import {ICreateProjectData} from "../types";
import $host from "../../../http/host";
import {AppDispatch} from "../../../store/store";
import {projectsAction} from "../../Dashboard";
import {getDesksRequest} from "../../../http/globals/getDeskRequest";
import {baseRequest} from "../../../common/base/baseRequest";


export const editProjectRequest = (dispatch: AppDispatch, editProject: ICreateProjectData, id: string) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch(`/projects/${id}`, editProject);

        dispatch(getDesksRequest(dispatch, +id))
    }, { title: "Done!", text: "Project name edited!" });
}
