import {FC, FormEvent, useEffect} from "react";
import {useParams} from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {addTaskRequest} from "./api/addTaskRequest";
import {getMembersProject} from "../AddMemberInProject/api/getMembersProject";

import {yupResolver} from "@hookform/resolvers/yup";
import {addTaskSchema} from "./schema";
import {priorityOptions, statusOptions, typeOfOptions} from "./data";
import {appActions} from "../../store/app";

import Select from "../../UI/Select/Select";
import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";

import {IAddTaskProps, ITask} from "./types";

import {projectActions} from "../ColumnsProject/store/projectSlice";

import './AddTask.scss';

function convertTimeToMinutes(time: string): number {
    const [weeks, days, hours, minutes] = time.split(':').map(Number);
    const totalMinutes = weeks * 7 * 24 * 60 + days * 24 * 60 + hours * 60 + minutes;
    return totalMinutes;
}

const AddTask: FC<IAddTaskProps> = ({setIsModalOpen}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ITask>({
        resolver: yupResolver(addTaskSchema)
    });

    const dispatch = useTypedDispatch();
    const project = useTypedSelector(state => state.project);
    const userId = useTypedSelector(state => state.user.id);
    const projectAndDeskId = useParams().id;

    const searchParams = new URLSearchParams(document.location.search);
    const columnId = searchParams.get('columnId');

    const {memberships} = useTypedSelector(state => state.memberships);

    useEffect(() => {
        dispatch(getMembersProject(projectAndDeskId))
    }, []);


    const assignOptions = memberships.map((user) => {
        return {
            id: user.user_id,
            value: `${user.user_id}`,
            label: `${user.first_name}, ${user.email}`
        }
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
                assignee_id: +newTask.assignee_id,
                time_work: '0m'
            }

            dispatch(appActions.setIsAppLoading(true));

            const resp = await addTaskRequest(newTask);

            if (resp.status >= 200) {
                const updatedColumns = project.columns.map((col) => {
                    if (col.id === +columnId) {
                        return {
                            ...col,
                            tasks: [...col.tasks, resp.data],
                        };
                    } else {
                        return col;
                    }
                });

                dispatch(appActions.setIsAppLoading(false));
                dispatch(appActions.setAppNotification({title: "Done !", text: "Task created!"}));

                dispatch(projectActions.updateProject(updatedColumns));
            }

            setIsModalOpen(false);
        };

    return (
        <div className="add-task-form">
            <form onSubmit={handleSubmit(handleSubmitAddTask)}>
                <div className="add-task-form__fields">
                    <h2 className="title">
                        Add task
                    </h2>

                    <FormField
                        defaultValue="Task name"
                        label="Name Task"
                        type="text"
                        name="name"
                        register={{...register("name")}}
                        errorMessage={errors.name?.message}
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

                    {/*<FormField*/}
                    {/*    defaultValue="Enter time e.g. 2w, 4d, 6h, 45m"*/}
                    {/*    label="Time work"*/}
                    {/*    type="text"*/}
                    {/*    name="time_work"*/}
                    {/*    register={{...register("time_work")}}*/}
                    {/*/>*/}

                    {/*<FormField*/}
                    {/*    defaultValue="task"*/}
                    {/*    label="Label task"*/}
                    {/*    type="text"*/}
                    {/*    name="label"*/}
                    {/*    register={{...register("label")}}*/}
                    {/*/>*/}

                    {/*<FormField*/}
                    {/*    defaultValue="1"*/}
                    {/*    label="Sort number"*/}
                    {/*    type="text"*/}
                    {/*    name="sort_number"*/}
                    {/*    register={{...register("sort_number")}}*/}
                    {/*/>*/}

                    <Select
                        defaultValue="Assign"
                        name="assignee_id"
                        label="Assign user"
                        options={assignOptions}
                        register={{...register("assignee_id")}}
                    />

                    {/*need to fix layout*/}

                    <div className="dates">
                        <FormField
                            defaultValue="2023-05-04"
                            label="Start date"
                            type="text"
                            name="start_date"
                            register={{...register("start_date")}}
                        />

                        <FormField
                            defaultValue="2023-05-08"
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

                    <Button type="submit">
                        Add task
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;