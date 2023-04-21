import {FormEvent, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {SubmitHandler, useForm} from "react-hook-form";

import {getTask} from "./api";
import {editTask} from "./api/editTask";

import {IFullTask} from "../../common/types";

import Pencil from "../../assets/svg/pencil.svg";

import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";

import "./Task.scss";
import {IPatchTask} from "./types";


const Task = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);
    const [isEdit, setIsEdit] = useState(false);

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

    useEffect(() => {
        dispatch(getTask(searchParams.get('taskId')));
    }, []);

    return (
        <div className="task">
            <div className={`task__wrapper ${!isEdit ? 'active' : ''}`}>
                <div className="task__header">
                    <div className="task__complete">

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