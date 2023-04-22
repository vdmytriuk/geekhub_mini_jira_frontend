import $host from "../../../http/host";

export const addTaskRequest = async (member: number, id: string) => {
    try {
        await $host.post(`/projects/${id}/add_member`, {user_id: +member, projects_id: id});

    } catch (e) {
        console.log(e);
    }
}

