import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMembers} from "./types";


const initialState:{ members: IMembers[]} = {
    members: [{
        id: 0,
        user_id: 0,
        project_id: 0,
        role: "",
        updated_at: "",
        created_at: ""
    }]
};
export const membersProjectSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        setMembers(state, action: PayloadAction<IMembers[]>) {
            return {
                ...state,
                members: action.payload,
            }
        },
    }
});


export const {
    reducer: membersProjectReducer,
    actions: membersProjectActions
} = membersProjectSlice;