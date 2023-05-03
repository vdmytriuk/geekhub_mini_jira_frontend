import $host from "../../../http/host";

import {ITask} from "../types";

export const addTaskRequest = async (taskData: ITask) => {
    try {
        return await $host.post('/tasks', taskData);

    } catch (e) {
        console.log(e);
    }
}