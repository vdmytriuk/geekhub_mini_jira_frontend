import $host from "../host";
import {AppDispatch} from "../../store/store";
import {projectActions} from "../../modules/ColumnsProject/store/projectSlice";
import {IDesk} from "../../modules/ColumnsProject/store/types";
import {baseRequest} from "../../common/base/baseRequest";


export const getDesksRequest = (dispatch: AppDispatch, id: number) => {
    return baseRequest<any>(async () => {
        const response = await $host.get<IDesk>(`/projects/${id}/desks/${id}`);

        const project = response?.data;
        dispatch(projectActions.setProject(project))
    });
}
