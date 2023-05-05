import $host from "../../../http/host";

import {taskActions} from "../store";
import {AppDispatch} from "../../../store/store";

import {IFullTask} from "../../../common/types";
import {baseRequest} from "../../../common/base/baseRequest";

export const isCompletedTask = (dispatch: AppDispatch, isTaskCompleted: number, id: number) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch<IFullTask>(`/tasks/${id}`, {status: isTaskCompleted});

        const task = resp?.data;

        dispatch(taskActions.setTask(task));
    }, { title: "Done!", text: "Task flag changed!" });
}