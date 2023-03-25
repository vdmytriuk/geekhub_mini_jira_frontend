import {IProject} from "../../../common/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IProjectsState {
    projects: IProject[];
}

const initialState: IProjectsState = {
    projects: []
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action: PayloadAction<IProject[]>) {
            state.projects = action.payload
        }
    }
});

export const {
    reducer: projectsReducer,
    actions: projectsAction
} = projectsSlice;