import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {getTask} from "./api";

import Pencil from "../../assets/svg/pencil.svg";

import "./Task.scss";


const Task = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(getTask(searchParams.get('taskId')));

        console.log(task)
    }, [])

    return (
        <div className="task">
            <div className="task__header">
                <div className="task__complete">

                </div>

                <button className="task__edit">
                    <Pencil/>

                    <span className="small-text text-light">
                        Edit task
                    </span>
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
    );
};

export default Task;