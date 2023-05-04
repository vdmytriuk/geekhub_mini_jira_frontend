export interface IAddTaskProps {
    columnId?: number;
    setIsModalOpen?: any;
}

export interface ITask {
    assignee_id: any;
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