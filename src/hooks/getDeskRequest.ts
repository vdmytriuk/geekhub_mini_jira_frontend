import $host from "../http/host";
import {AppDispatch} from "../store/store";
import {projectActions} from "../store/project/projectSlice";
import {IDesk} from "../store/project/types";


export const getDesksRequest = (id: number) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const response = await $host.get<IDesk>(`/projects/${id}/desks/${id}`);

            const project = response?.data;
            dispatch(projectActions.setProject(project))

        } catch (e) {
            console.log(e);
        }
    }
}
