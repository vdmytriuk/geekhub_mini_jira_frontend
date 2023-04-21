export interface IPatchTask {
    assignee_id: number;
    column_id: number;
    desk_id: number;
    project_id: number;
    user_id: number;
    title: string;
    description: string;
    sort_number: number;
    estimate: string;
    label?: string;
    priority: string;
    start_date: string;
    end_date: string;
    status: string;
    type_of: string;
}