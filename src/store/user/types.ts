export interface IUpdateUser {
    name: string;
    last_name: string;
}

export interface IUserState {
    id: number | null;
    email: string;
    password: string;
    isAuth?: boolean;
    isAppLoaded?: boolean;
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