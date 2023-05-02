import $host from "../../../http/host";
import {IFullTask} from "../../../common/types";

export const getDataTask = async (id: string) => {
    try {
        const resp = await $host.get<IFullTask>(`/tasks/${id}`);

        const task = resp?.data;

        return task;

    } catch (e) {
        console.log(e);
    }
}