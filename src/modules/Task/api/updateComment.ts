import $host from "../../../http/host";

import {IComment} from "../types";
import {AppDispatch} from "../../../store/store";
import {taskActions} from "../store";
import {baseRequest} from "../../../common/base/baseRequest";

export const updateComment = (dispatch: AppDispatch, comment: IComment, commentId: number) => {
    return baseRequest<any>(async () => {
        const resp = await $host.patch(`/comments/${commentId}`, comment);

        dispatch(taskActions.updateComment({ ...comment, id: commentId }));
    }, { title: "Done!", text: "Comment was edited!" });
}