import $host from "../../../http/host";

export const getProjectsRequest = async () => {
    try {
        const resp = await $host.get('/projects');

        return resp;
    } catch (e) {

    }
}