import $host from "../../../http/host";

export const addTaskRequest = async (member: string, id: string) => {
    try {
        await $host.post(`/projects/${id}/add_member`, {email: member, projects_id: id});

    } catch (e) {
        console.log(e);
    }
}

