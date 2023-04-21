import $host from "../../../http/host";
import {taskActions} from "../store";

import {AppDispatch} from "../../../store/store";

export const deleteComment = (commentId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await $host.delete(`/comments/${commentId}`);

            dispatch(taskActions.deleteComment(commentId));
        } catch (e) {
            console.log(e);
        }
    }
}