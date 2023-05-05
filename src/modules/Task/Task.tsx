import {ChangeEvent, FormEvent, useEffect, useMemo, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";

import {getDesksRequest} from "../../http/globals/getDeskRequest";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {intervalToMinutes, minutesToInterval} from "../../hooks/useIntervalToMinutes";

import UpdateComment from "./components/UpdateComment/UpdateComment";
import AddCommentForm from "./components/AddCommentForm/AddCommentForm";
import AddTimeTracking from "./components/AddTimeTracking/AddTimeTracking";

import {getMembersProject} from "../AddMemberInProject/api/getMembersProject";
import {formatDate} from "./helper";
import {priorityOptions} from "../AddTask/data";

import {getTask} from "./api";
import {editTask} from "./api/editTask";
import {deleteComment} from "./api/deleteComment";
import {isCompletedTask} from "./api/isCompletedTask";

import {IFullTask} from "../../common/types";
import {IComment, IPatchTask, ITimeTracking} from "./types";

import Pencil from "../../assets/svg/pencil.svg";

import Select from "../../UI/Select/Select";
import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";
import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import "./Task.scss";
import {addComment} from "./api/addComment";

const Task = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);
    const {memberships} = useTypedSelector(state => state.memberships);

    const [isEdit, setIsEdit] = useState(false);
    const [editedCommentId, setEditedCommentId] = useState(0);

    const searchParams = new URLSearchParams(document.location.search);
    const projectAndDeskId = useParams().id;

    const assignOptions = memberships.map((user) => {
        return {
            id: user.user_id,
            value: `${user.user_id}`,
            label: `${user.first_name}, ${user.email}`
        }
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm<IPatchTask>({
        defaultValues: useMemo(() => {
            return task
        }, [task])
    });

    const handleSubmitEditTask: SubmitHandler<IPatchTask> = async (newTask, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        newTask = {
            ...newTask
        }

        await dispatch(editTask(dispatch, task.id, newTask));

        await dispatch(getDesksRequest(dispatch, +projectAndDeskId));

        setIsEdit(false);
    };

    const totalMinutes = intervalToMinutes(task.estimate);
    const completedMinutes = intervalToMinutes(task.time_work ? task.time_work : '0m');
    const timeLeft = minutesToInterval(Math.floor((-completedMinutes + totalMinutes)));

    const handleIsTaskCompleted = async (e: ChangeEvent<HTMLInputElement>) => {
        await dispatch(isCompletedTask(dispatch, +e.target.checked, task.id));
    };

    useEffect(() => {
        dispatch(getTask(dispatch, searchParams.get('taskId')));

        dispatch(getMembersProject(projectAndDeskId));
    }, []);

    useEffect(() => {
        reset(task);
    }, [task]);

    const handleCommentDelete = async (commentId: number) => {
        dispatch(deleteComment(dispatch, commentId));

        await dispatch(getDesksRequest(dispatch, +projectAndDeskId));
    };

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
                        {task.name}
                    </h3>
                </div>

                <div className="task__chars">
                    <div className="task__char">
                        <p className="small-bolded-text">
                            CREATED BY
                        </p>

                        <p className="small-text">
                            {task.user.first_name}
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
                            Time Spent
                        </p>

                        <p className="small-text">
                            {task.time_work ? task.time_work : '0m'}
                        </p>
                    </div>

                    <div className="task__char">
                        <p className="small-bolded-text">
                            Time left
                        </p>

                        <p className={`${timeLeft[0] === '-' ? "red-text" : ""} small-text`}>
                            {timeLeft}
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
                    <div className="task__char">
                        <p className="small-bolded-text">
                            Assigned
                        </p>

                        <p className="small-text">
                            {task.assignee?.first_name ?? "No assignee"}
                            {/*{task.assignee?.last_name ?? ""}*/}
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

                    <div className="task__separator"/>

                    <AddTimeTracking/>

                    <div className="task__separator"/>

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
                                            name={task.user.first_name}
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
                                            {task.user.first_name} {task.user.last_name}
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
                                                    onClick={() => handleCommentDelete(comment.id)}
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
                        <h2 className="title">
                            Edit task
                        </h2>
                    </div>

                    <button onClick={() => setIsEdit(false)} className="small-text text-light">
                        Back to task
                    </button>
                </div>

                <div className="task__separator"/>

                <form onSubmit={handleSubmit(handleSubmitEditTask)} className="task__inner">
                    <FormField
                        defaultValue={task.name}
                        label="Name"
                        type="text"
                        name="name"
                        register={{...register("name")}}
                        errorMessage={errors.name?.message}
                    />

                    <Select
                        defaultValue="Assign"
                        name="assignee_id"
                        label="Assign user"
                        options={assignOptions}
                        register={{...register("assignee_id")}}
                    />

                    <FormField
                        defaultValue={task.estimate}
                        label="Estimate"
                        type="text"
                        name="estimate"
                        register={{...register("estimate")}}
                        errorMessage={errors.name?.message}
                    />

                    <FormField
                        defaultValue={task.description}
                        label="Description"
                        type="text"
                        name="description"
                        register={{...register("description")}}
                        errorMessage={errors.name?.message}
                    />

                    {/*<FormField*/}
                    {/*    defaultValue={task.priority}*/}
                    {/*    label="Priority"*/}
                    {/*    type="text"*/}
                    {/*    name="priority"*/}
                    {/*    register={{...register("priority")}}*/}
                    {/*    errorMessage={errors.name?.message}*/}
                    {/*/>*/}
                    <Select
                        defaultValue="Lowest"
                        name="priority"
                        label="Priority"
                        options={priorityOptions}
                        register={{...register("priority")}}
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