import {AppDispatch} from "../../../store/store";
import $host from "../../../http/host";
import {taskActions} from "../store";
import {IFullTask} from "../../../common/types";
import {baseRequest} from "../../../common/base/baseRequest";

export const addTimeTracking = (dispatch: AppDispatch, timeTracking: object, id: number) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch<IFullTask>(`/tasks/${id}`, timeTracking);

        const task = resp?.data;

        dispatch(taskActions.setTask(task));
    }, { title: "Done!", text: "Work time submitted!" });
}