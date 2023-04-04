export interface IColumnProps {
    id: string;
    label: string;
    tint: number;
    items: Array<ITaskProps>
}

export interface ITaskProps {
    task_id: string;
    title_task: string;

}