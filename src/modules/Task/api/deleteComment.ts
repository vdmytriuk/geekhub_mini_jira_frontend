import $host from "../../../http/host";
import {baseRequest} from "../../../common/base/baseRequest";

import {taskActions} from "../store";

import {AppDispatch} from "../../../store/store";

export const deleteComment = (dispatch: AppDispatch, commentId: number) => {
    return baseRequest<any>(async () => {
        await $host.delete(`/comments/${commentId}`);

        dispatch(taskActions.deleteComment(commentId));
    }, { title: "Done!", text: "Comment deleted!" });
}