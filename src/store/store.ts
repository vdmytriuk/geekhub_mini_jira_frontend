import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {appReducer} from "./app";
import {userReducer} from "./user";
import {taskReducer} from "../modules/Task";
import {projectReducer} from "../modules/ColumnsProject/store/projectSlice";
import {projectsReducer} from "../modules/Dashboard";
import {progressReducer} from "../modules/ColumnsProject/store/progressSlice";
import {membersProjectReducer} from "../modules/MembersInProject/store/membersProjectSlice";

const rootReducer = combineReducers({
    app: appReducer,
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