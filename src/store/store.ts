import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {userReducer} from "./user";
import {projectsReducer} from "../modules/Dashboard";
import {taskReducer} from "../modules/Task";

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    task: taskReducer,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;