import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IColumn, IDesk} from "./types";

const initialState: {
        desk: IDesk, columns: IColumn[]
    } = {
        desk: {
            id: 0,
            name: "",
            columns: [],
            project: {
                id: null,
                name: "",
                git_url: "",
                git_repo: "",
                status: ""
            },
        },
        columns: [],
    }
;
export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProject(state, action: PayloadAction<IDesk>) {
            return {
                ...state,
                desk: action.payload,
                columns: action.payload.columns,
                project: action.payload.project
            }
        },
        updateProject(state, action: PayloadAction<IColumn[]>) {
            return {
                ...state,
                columns: action.payload,
            }
        },

        updateProjectValue(state, action: PayloadAction<{name: string}>) {
            return {
                ...state,
                project: action.payload
            }
        }
    }
});


export const {
    reducer: projectReducer,
    actions: projectActions
} = projectSlice;