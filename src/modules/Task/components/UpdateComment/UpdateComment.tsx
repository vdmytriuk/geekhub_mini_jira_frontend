import {FC, FormEvent, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {updateComment} from "../../api/updateComment";

import {FormField} from "../../../../UI/FormField/FormField";

import {IComment} from "../../types";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";

interface IUpdateCommentProps {
    comment: any;
    isVisible: any;
    handleCancel: any;
}

const UpdateComment: FC<IUpdateCommentProps> = ({comment, isVisible, handleCancel}) => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);

    const {register, handleSubmit, setValue} = useForm<IComment>();

    const handleCommentSubmit: SubmitHandler<IComment> =
        async (newComment, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            newComment = {
                ...newComment,
                commentable_type: "Task",
                commentable_id: task.id
            };

            await dispatch(updateComment(dispatch, newComment, comment.id));

            handleCancel(comment);
        };

    useEffect(() => {
        setValue('body', comment.body);
    }, [comment]);

    return (
        <form
            className={`comment-forms-wrapper ${isVisible}`}
            onSubmit={handleSubmit(handleCommentSubmit)}
        >
            <FormField
                type="textarea"
                name="comment"
                defaultValue={comment.body}
                register={{...register("body")}}
            />

            <div className="edit-comment-buttons">
                <button
                    className="comment-btn update"
                    type="submit"
                >
                    Update
                </button>

                <button
                    className="comment-btn cancel"
                    onClick={() => handleCancel(comment)}
                >
                    Cancel
                </button>
            </div>

        </form>
    );
};

export default UpdateComment;