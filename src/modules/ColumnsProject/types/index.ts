import {ITaskProps} from "../../../components/TaskInBoard/types";

// export interface IColumnProps {
//     id: string;
//     label: string;
//     tint: number;
//     items: Array<ITaskProps>;
// }

export interface ITask {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    type_of: string;
    label: string;
    estimate: string;
    start_date: string;
    end_date: string;
    assignee_id: number;
    created_at: string;
    updated_at: string;
    user_id: number;
    project_id: number;
    desk_id: number;
    column_id: number;
    tag_name: string;
    sort_number: number;
}

export interface IColumn {
    id: number;
    name: string;
    ordinal_number: number;
    tasks: ITask[];
}

export interface IDesk {
    id: number;
    name: string;
    columns: IColumn[];
}
