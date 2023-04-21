import {ITask} from "../../../common/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../types";

const initialState: ITask = {
    id: 0,
    user: {
        id: null,
        name: "",
        last_name: "",
        email: ""
    },
    assignee: {
        id: 0,
        name: "",
        last_name: ""
    },
    title: "",
    description: "",
    tag_name: "",
    sort_number: 0,
    estimate: "",
    label: "",
    priority: "",
    type_of: "",
    status: "",
    start_date: "",
    end_date: "",
    created_at: "",
    updated_at: "",
    comments: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask(state, action: PayloadAction<ITask>) {
            return {
                ...state,
                ...action.payload
            }
        },
        setComment(state, action: PayloadAction<IComment>) {
            state.comments.push(action.payload);
        },
        deleteComment(state, action: PayloadAction<number>) {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
        updateComment(state, action: PayloadAction<IComment>) {
            state.comments = state.comments.map(comment => {
                if (comment.id === action.payload.id) return {...comment, ...action.payload};
                return {...comment};
            });
        }
    }
});

export const {
    reducer: taskReducer,
    actions: taskActions
} = taskSlice;