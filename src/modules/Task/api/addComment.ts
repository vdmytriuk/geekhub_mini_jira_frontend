import $host from "../../../http/host";

import {baseRequest} from "../../../common/base/baseRequest";

import {taskActions} from "../store";
import {AppDispatch} from "../../../store/store";

import {IComment} from "../types";

export const addComment = (dispatch: AppDispatch, comment: IComment) => {
    return baseRequest<any>(async () => {
        const resp = await $host.post('/comments', comment);
        const newComment = resp?.data;

        dispatch(taskActions.setComment(newComment));
    }, { title: "Complete!", text: "Comment created!" });
}