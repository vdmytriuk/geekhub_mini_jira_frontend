export interface IPatchTask {
    assignee_id: number;
    column_id: number;
    desk_id: number;
    project_id: number;
    user_id: number;
    name: string;
    description: string;
    sort_number: number;
    estimate: string;
    label?: string;
    priority: string;
    start_date: string;
    end_date: string;
    status: string;
    type_of: string;
    time_work: string;
}

export interface IComment {
    body: string;
    commentable_type: string;
    commentable_id: number;
    id?: number;
}

export interface ITimeTracking {
    time_work: string;
}