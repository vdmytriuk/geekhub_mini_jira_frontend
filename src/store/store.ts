import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {userReducer} from "./user";
import {projectsReducer} from "../modules/Dashboard";
import {taskReducer} from "../modules/Task";
import {progressReducer} from "./progress/progressSlice";
import {projectReducer} from "./project/projectSlice";
import {membersProjectReducer} from "./membersProject/membersProjectSlice";

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    task: taskReducer,
    progress: progressReducer,
    project: projectReducer,
    memberships: membersProjectReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;