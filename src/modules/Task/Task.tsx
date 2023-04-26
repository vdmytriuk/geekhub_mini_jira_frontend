import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import UpdateComment from "./UpdateComment";
import AddCommentForm from "./AddCommentForm";

import {formatDate} from "./helper";

import {getTask} from "./api";
import {editTask} from "./api/editTask";
import {deleteComment} from "./api/deleteComment";
import {isCompletedTask} from "./api/isCompletedTask";

import {IFullTask} from "../../common/types";
import {IPatchTask} from "./types";

import Pencil from "../../assets/svg/pencil.svg";

import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";
import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import "./Task.scss";

const Task = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);
    const [isEdit, setIsEdit] = useState(false);
    const [editedCommentId, setEditedCommentId] = useState(0);

    const searchParams = new URLSearchParams(document.location.search);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IPatchTask>();

    const handleSubmitEditTask: SubmitHandler<IPatchTask> = async (newTask, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        newTask = {
            ...newTask
        }

        await dispatch(editTask(task.id, newTask));

        setIsEdit(false);
    };

    const handleIsTaskCompleted = async (e: ChangeEvent<HTMLInputElement>) => {
        await dispatch(isCompletedTask(+e.target.checked, task.id));
    };

    useEffect(() => {
        dispatch(getTask(searchParams.get('taskId')));
    }, []);

    return (
        <div className="task">
            <div className={`task__wrapper ${!isEdit ? 'active' : ''}`}>
                <div className="task__header">
                    <div className="task__complete">

                        <input
                            className="checkbox"
                            id="isCompleted"
                            type="checkbox"
                            checked={task.status === 'close'}
                            onChange={handleIsTaskCompleted}
                        />
                        <label
                            htmlFor="isCompleted"
                            className={task.status === 'close' ? "completed" : "uncompleted"}
                        >
                            {task.status === 'close' ? 'Completed' : 'Complete task'}
                        </label>

                    </div>

                    <button className="task__edit">
                        <Pencil/>

                        <button onClick={() => setIsEdit(true)} className="small-text text-light">
                            Edit task
                        </button>
                    </button>
                </div>

                <div className="task__separator"/>

                <div className="task__top">
                    <h3 className="medium-title">
                        {task.title}
                    </h3>
                </div>

                <div className="task__chars">
                    <div className="task__char">
                        <p className="small-bolded-text">
                            CREATED BY
                        </p>

                        <p className="small-text">
                            {task.user.name}
                        </p>
                    </div>

                    <div className="task__char">
                        <p className="small-bolded-text">
                            Estimate
                        </p>

                        <p className="small-text">
                            {task.estimate}
                        </p>
                    </div>

                    <div className="task__char">
                        <p className="small-bolded-text">
                            Priority
                        </p>

                        <p className="small-text">
                            {task.priority}
                        </p>
                    </div>
                </div>

                <div className="task__labels">
                    <div className="task__label">
                        <p className="small-text">
                            {task.label}
                        </p>
                    </div>
                </div>

                <div className="task__separator"/>

                <div className="task__inner">
                    <div className="task__description">
                        <p className="medium-weight text-light">
                            Description
                        </p>

                        <p className="text-light">
                            {task.description}
                        </p>
                    </div>

                    <div className="task__comments">
                        <p className="medium-weight text-light">
                            Comments
                        </p>

                        <div className="comments-form">
                            <AddCommentForm/>
                        </div>
                        {/*rename classes*/}

                        <div className="comments-wrapper">
                            {task.comments.map((comment: any) => (

                                <div className="block-with-avatar" key={comment.id}>

                                    <div className="commented-avatar">
                                        <DefaultUserAvatar
                                            name={task.user.name}
                                            last_name={task.user.last_name}
                                            width="4.6rem"
                                            height="4.6rem"
                                            fontSize="2.1rem"
                                            color="#F87B43"
                                            backgroundColor="#FFF4E4"
                                        />
                                    </div>

                                    <div
                                        className="comment-wrapper"

                                    >
                                        <p className="comment-user-name">
                                            {task.user.name} {task.user.last_name}
                                        </p>

                                        <div className="comment">
                                            <p className={editedCommentId !== comment.id ? "visible" : "invisible"}>
                                                {comment.body}
                                            </p>
                                            <UpdateComment
                                                comment={comment}
                                                isVisible={editedCommentId === comment.id ? "visible" : "invisible"}
                                                handleCancel={() => setEditedCommentId(0)}
                                            />
                                        </div>

                                        <div className="comment-info">
                                            <div className="comment-buttons">
                                                <button
                                                    onClick={() => setEditedCommentId(comment.id)}
                                                    className="comment-btn edit">
                                                    <span>Edit</span>
                                                </button>

                                                <button
                                                    onClick={() => dispatch(deleteComment(comment.id))}
                                                    className="comment-btn delete"
                                                >
                                                    <span>Delete</span>
                                                </button>
                                            </div>

                                            <p className="comment-info__date">
                                                {formatDate(comment.created_at)}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className={`task__wrapper ${isEdit ? 'active' : ''}`}>
                <div className="task__header">
                    <div className="task__complete">

                    </div>

                    <button onClick={() => setIsEdit(false)} className="small-text text-light">
                        Back to task
                    </button>
                </div>

                <div className="task__separator"/>

                <form onSubmit={handleSubmit(handleSubmitEditTask)} className="task__inner">
                    <FormField
                        defaultValue={task.title}
                        label="Title"
                        type="text"
                        name="title"
                        register={{...register("title")}}
                        errorMessage={errors.title?.message}
                    />

                    <FormField
                        defaultValue={task.estimate}
                        label="Estimate"
                        type="text"
                        name="estimate"
                        register={{...register("estimate")}}
                        errorMessage={errors.title?.message}
                    />

                    <FormField
                        defaultValue={task.description}
                        label="Description"
                        type="text"
                        name="description"
                        register={{...register("description")}}
                        errorMessage={errors.title?.message}
                    />

                    <FormField
                        defaultValue={task.priority}
                        label="Priority"
                        type="text"
                        name="priority"
                        register={{...register("priority")}}
                        errorMessage={errors.title?.message}
                    />


                    <Button type="submit">
                        Edit task
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Task;