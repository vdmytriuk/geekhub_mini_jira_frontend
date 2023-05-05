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

export interface IProject {
    git_repo: string
    git_url: string
    id: number
    name: string
    status: string
}

export interface IDesk {
    id: number;
    name: string;
    columns: IColumn[];
    project: IProject
}

export interface IProgressState {
    width: number
}

export interface IProgress {
    width: number
}