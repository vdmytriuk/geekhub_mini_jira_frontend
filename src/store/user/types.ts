export interface IUpdateUser {
    first_name: string;
    last_name: string;
}

export interface IUserState {
    id: number | null;

    email: string;
    first_name: string,
    password?: string;
    isAuth?: boolean;
    name?: string;
    last_name?: string;
}

export interface IUserProfile {
    id: number;
    name?: string;
    password?: string;
    last_name?: string;
    email: string;
}