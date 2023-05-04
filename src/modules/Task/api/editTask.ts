import $host from "../../../http/host";

import {taskActions} from "../store";

import {IPatchTask} from "../types";
import {AppDispatch} from "../../../store/store";
import {IFullTask} from "../../../common/types";
import {baseRequest} from "../../../common/base/baseRequest";

export const editTask = (dispatch: AppDispatch, id: number, editedTask: IPatchTask) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch<IFullTask>(`/tasks/${id}`, editedTask);

        const task = resp?.data;

        dispatch(taskActions.setTask(task));
    }, { title: "Done!", text: "Task edited!" });
}