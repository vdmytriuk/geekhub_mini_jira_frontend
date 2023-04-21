import $host from "../../../http/host";
import {taskActions} from "../store";
import {AppDispatch} from "../../../store/store";

import {IComment} from "../types";

export const addComment = (comment: IComment) => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.post('/comments', comment);
            const newComment = resp?.data;

            dispatch(taskActions.setComment(newComment));
        } catch (e) {
            console.log(e);
        }
    }
}