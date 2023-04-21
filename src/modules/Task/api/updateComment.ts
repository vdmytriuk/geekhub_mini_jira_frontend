import $host from "../../../http/host";

import {IComment} from "../types";
import {AppDispatch} from "../../../store/store";
import {taskActions} from "../store";

export const updateComment =  (comment: IComment, commentId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const resp = await $host.patch(`/comments/${commentId}`, comment);

            dispatch(taskActions.updateComment({ ...comment, id: commentId }));
        } catch (e) {
            console.log(e);
        }
    }
}