import $host from "../../../http/host";

import {taskActions} from "../store";

import {IPatchTask} from "../types";
import {AppDispatch} from "../../../store/store";
import {IFullTask} from "../../../common/types";


export const editTask = (id: number, editedTask: IPatchTask) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.patch<IFullTask>(`/tasks/${id}`, editedTask);

            const task = resp?.data;

            dispatch(taskActions.setTask(task));
        } catch (e) {
            console.log(e);
        }
    }
}