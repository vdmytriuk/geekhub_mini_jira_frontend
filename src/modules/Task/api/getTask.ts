import $host from "../../../http/host";

import {taskActions} from "../store";

import {ITask} from "../../../common/types";
import {AppDispatch} from "../../../store/store";


export const getTask = (id: string) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.get<ITask>(`/tasks/${id}`);

            const task = resp?.data;

            dispatch(taskActions.setTask(task));
        } catch (e) {
            console.log(e);
        }
    }
}