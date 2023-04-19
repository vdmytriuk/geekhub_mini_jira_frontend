import {FC, FormEvent} from "react";
import {useParams} from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {addTaskRequest} from "./api/addTaskRequest";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {addTaskSchema} from "./schema";
import {priorityOptions, statusOptions, typeOfOptions} from "./data";

import Select from "../../UI/Select/Select";
import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";

import {IAddTaskProps, ITask} from "./types";

import './AddTask.scss';

const AddTask: FC<IAddTaskProps> = ({setIsModalOpen}) => {
    const projectAndDeskId = useParams().id;
    const userId = useTypedSelector(state => state.user.id);

    const searchParams = new URLSearchParams(document.location.search);
    const columnId = searchParams.get('columnId');

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ITask>({
        resolver: yupResolver(addTaskSchema)
    });

    const handleSubmitAddTask: SubmitHandler<ITask> =
        async (newTask, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            newTask = {
                ...newTask,
                user_id: userId,
                project_id: +projectAndDeskId,
                desk_id: +projectAndDeskId,
                column_id: +columnId,
                assignee_id: userId
            }

            await addTaskRequest(newTask);
            setIsModalOpen(false);
        };

    return (
        <div className="add-task-form">
            <form onSubmit={handleSubmit(handleSubmitAddTask)}>
                <div className="add-task-form__fields">
                    <FormField
                        defaultValue="Task title"
                        label="Name Task"
                        type="text"
                        name="title"
                        register={{...register("title")}}
                        errorMessage={errors.title?.message}
                    />

                    <FormField
                        defaultValue="Task description"
                        label="Description"
                        type="text"
                        name="description"
                        register={{...register("description")}}
                    />

                    <FormField
                        defaultValue="2w"
                        label="Estimate"
                        type="text"
                        name="estimate"
                        register={{...register("estimate")}}
                    />

                    <FormField
                        defaultValue="task"
                        label="Label task"
                        type="text"
                        name="label"
                        register={{...register("label")}}
                    />

                    <FormField
                        defaultValue="1"
                        label="Sort number"
                        type="text"
                        name="sort_number"
                        register={{...register("sort_number")}}
                    />

                    {/*need to fix layout*/}

                    <div className="dates">
                        <FormField
                            defaultValue="2023-12-12"
                            label="Start date"
                            type="text"
                            name="start_date"
                            register={{...register("start_date")}}
                        />

                        <FormField
                            defaultValue="2023-12-12"
                            label="End date"
                            type="text"
                            name="end_date"
                            register={{...register("end_date")}}
                        />
                    </div>

                    {/*need to fix layout*/}

                    <div className="selects">
                        <Select
                            defaultValue="Open"
                            name="status"
                            label="Status"
                            options={statusOptions}
                            register={{...register("status")}}
                        />

                        <Select
                            defaultValue="Task"
                            name="type_of"
                            label="Type of"
                            options={typeOfOptions}
                            register={{...register("type_of")}}
                        />

                        <Select
                            defaultValue="Lowest"
                            name="priority"
                            label="Priority"
                            options={priorityOptions}
                            register={{...register("priority")}}
                        />
                    </div>
                </div>

                <Button type="submit">
                    Add task
                </Button>
            </form>
        </div>
    );
};

export default AddTask;