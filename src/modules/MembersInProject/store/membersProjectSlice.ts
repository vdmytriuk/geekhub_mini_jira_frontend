import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMembers} from "./types";


const initialState:{ memberships: IMembers[]} = {
    memberships: [{
        id: 0,
        user_id: 0,
        email: "",
        first_name: "",
        project_id: 0,
        role: "",
        updated_at: "",
        created_at: ""
    }]
};
export const membersProjectSlice = createSlice({
    name: "memberships",
    initialState,
    reducers: {
        setMembers(state, action: PayloadAction<IMembers[]>) {
            return {
                ...state,
                memberships: action.payload,
            }
        },
    }
});


export const {
    reducer: membersProjectReducer,
    actions: membersProjectActions
} = membersProjectSlice;