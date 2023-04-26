import $host from "../../../http/host";

import {taskActions} from "../store";
import {AppDispatch} from "../../../store/store";

import {IFullTask} from "../../../common/types";

export const isCompletedTask = (isTaskCompleted: number, id: number) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        try {
            const resp = await $host.patch<IFullTask>(`/tasks/${id}`, {status: isTaskCompleted});

            const task = resp?.data;

            dispatch(taskActions.setTask(task));
        } catch (e) {
            console.log(e);
        }
    }
}