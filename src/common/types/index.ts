import {IComment} from "../../modules/Task/types";

export interface IProject {
    name: string;
    id: number;
    status: string;
    user_id: string;
    updated_at: string;
}

export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string
}

export interface IFullTask {
    id: number,
    user?: IUser,
    assignee: {
        id: number,
        name: string,
        last_name: string
    },
    title: string,
    description: string,
    tag_name: string,
    sort_number: number,
    estimate: string,
    label: string,
    priority: string,
    type_of: string,
    status: any,
    start_date: string,
    end_date: string,
    created_at: string,
    updated_at: string,
    comments?: IComment[],
}