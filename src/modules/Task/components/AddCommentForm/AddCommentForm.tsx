import {FC, FormEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";

import {addComment} from "../../api/addComment";

import {FormField} from "../../../../UI/FormField/FormField";
import DefaultUserAvatar from "../../../../UI/DefaultUserAvatar/DefaultUserAvatar";

import {IComment} from "../../types";

import Send from "../../../../assets/svg/send.svg";

import './AddCommentForm.scss';
import {getDesksRequest} from "../../../../http/globals/getDeskRequest";
import {useParams} from "react-router";

const AddCommentForm: FC = () => {
    const { id } = useParams();
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);

    const {register, handleSubmit} = useForm<IComment>();

    const handleCommentSubmit: SubmitHandler<IComment> =
        async (comment, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            comment = {
                ...comment,
                commentable_type: "Task", // ???
                commentable_id: task.id
            };

            await dispatch(addComment(dispatch, comment));
            await dispatch(getDesksRequest(dispatch, +id));
        };

    return (
        <form onSubmit={handleSubmit(handleCommentSubmit)}>

            <div className="comment-forms-wrapper">

                <div className="comment-avatar">
                    <DefaultUserAvatar
                        name={task.user.first_name}
                        last_name={task.user.last_name}
                        width="4.6rem"
                        height="4.6rem"
                        fontSize="2.1rem"
                        color="#8A38F5"
                        backgroundColor="#EFE3FF"
                    />
                </div>

                <FormField
                    placeholder="Be the first to comment here..."
                    type="text"
                    name="comment"
                    register={{...register("body")}}
                />

                <button className="add-comment-btn" type="submit">
                    <Send/>
                </button>
            </div>

        </form>
    );
};

export default AddCommentForm;