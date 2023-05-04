import {AppDispatch} from "../../../store/store";
import $host from "../../../http/host";
import {taskActions} from "../store";
import {IFullTask} from "../../../common/types";


export const addTimeTracking = (timeTracking: object, id: number) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.patch<IFullTask>(`/tasks/${id}`, timeTracking);

            const task = resp?.data;

            dispatch(taskActions.setTask(task));
        } catch (e) {
            console.log(e);
        }
    }
}