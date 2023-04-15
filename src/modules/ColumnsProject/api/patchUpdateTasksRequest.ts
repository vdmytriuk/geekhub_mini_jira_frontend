import $host from "../../../http/host";

export const patchUpdateTasksRequest = async (idTask: number, idColumn: number) => {
        try {
            await $host.patch(`/tasks/${idTask}`, { "column_id": idColumn })
        }
        catch (e){
            console.log(e)
        }
}