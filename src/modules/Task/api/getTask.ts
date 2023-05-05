import $host from "../../../http/host";

import {taskActions} from "../store";

import {IFullTask} from "../../../common/types";
import {AppDispatch} from "../../../store/store";
import {baseRequest} from "../../../common/base/baseRequest";


export const getTask = (dispatch: AppDispatch, id: string) => {
    return baseRequest<any>(async () => {
        const resp = await $host.get<IFullTask>(`/tasks/${id}`);

        const task = resp?.data;

        dispatch(taskActions.setTask(task));
    });
}

