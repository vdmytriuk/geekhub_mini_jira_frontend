import $host from "../http/host";
import {IDesk} from "../modules/ColumnsProject";


export const getDesksRequest = async (id: number) => {
    try {
        const response = await $host.get<IDesk>(`/projects/${id}/desks/${id}`);

        return response?.data;

    } catch (e) {
        console.log(e);
    }
}