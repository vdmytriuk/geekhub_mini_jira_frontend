import {useLocation, useNavigate, useParams} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import Pencil from "../../assets/svg/pencil.svg";
import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import "./DeskProject.scss"
import {FormField} from "../../UI/FormField/FormField";
import {FormEvent, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../CreateProject/schema/schema";

import {editProjectRequest} from "./api/editProjectRequest";

import {Button} from "../../UI/Button/Button";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {projectActions} from "../../store/project/projectSlice";
import {getDesksRequest} from "../../hooks/getDeskRequest";
import {AddMemberInProject} from "../AddMemberInProject/AddMemberInProject";

interface IEditProject {
    name: string;
}

export const DeskProject = () => {
    const {id} = useParams()
    const dispatch = useTypedDispatch();
    const [editing, setEditing] = useState(false);
    const project = useTypedSelector(state => state.project.desk.project);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IEditProject>(
        {
            resolver: yupResolver(schema)
        }
    );

    const handleSubmitEditProject: SubmitHandler<IEditProject> =
        async (data, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            console.log("data", data)
            await dispatch(editProjectRequest(data, id));
            dispatch(getDesksRequest(+id))
        }

    const enableEditing = () => {
        setEditing(true);
    };

    return (
        <div className={"modal_project"}>
            <div className={"modal_project__block"}>
                <DefaultUserAvatar name={project.name}/>
                <div className={"modal_project__title"}>
                    <h1>{project.name}</h1>
                    <span className="task__edit">
                        <Pencil/>

                        <span className="small-text text-light" onClick={enableEditing}
                              style={{cursor: 'pointer'}}>
                                    Edit name
                                </span>
                        </span>
                </div>
                {editing ? (
                    <form onSubmit={handleSubmit(handleSubmitEditProject)} className={"edit-project_name"}>
                        <FormField
                            type="text"
                            name="name"
                            defaultValue={project.name}
                            register={{...register("name")}}
                            errorMessage={errors.name?.message}
                            onBlur={() => setEditing(false)}
                        />
                        <Button type="submit">
                            Edit project
                        </Button>
                    </form>
                ) : null}

            </div>
            <div>
                <span>
                    {project.status}
                </span>
            </div>
            <div>
                <AddMemberInProject/>
            </div>
        </div>
    )
}