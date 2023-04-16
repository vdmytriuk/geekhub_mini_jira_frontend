import $host from "../../../http/host";
import {IProject} from "../../../common/types";
import {IDesk} from "../types";

export const getDesksRequest = async (id: number) => {
        try {
            const response = await $host.get<IDesk>(`/projects/${id}/desks/${id}`);

            return response?.data;

        } catch (e) {
            console.log(e);
        }
}