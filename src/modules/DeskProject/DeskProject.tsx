import {useParams} from "react-router";
import {FormEvent, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {getDesksRequest} from "../../http/globals/getDeskRequest";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {editProjectRequest} from "./api/editProjectRequest";
import {AddMemberInProject} from "../AddMemberInProject/AddMemberInProject";

import {schema} from "../CreateProject/schema/schema";

import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";

import "./DeskProject.scss"

import Pencil from "../../assets/svg/pencil.svg";
import {MembersInProject} from "../MembersInProject/MembersInProject";

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

    const handleSubmitEditProject: SubmitHandler<IEditProject> = async (data, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            await dispatch(editProjectRequest(dispatch, data, id));

            setEditing(false)
        }

    const enableEditing = () => {
        setEditing(true);
    };

    return (
        <div className={"modal_project"}>
            <div className={"modal_project__block"}>
                <h3 className="small-title">
                    Project info
                </h3>

                <div className={"modal_project__block-info"}>
                    <DefaultUserAvatar name={project.name}/>
                    <div className={"modal_project__title"}>
                        <h1>{project.name}</h1>
                        <span className="task__edit modal_project__title-edit">
                        <Pencil/>

                        <span className="small-text text-light" onClick={enableEditing}
                              style={{cursor: 'pointer'}}>
                                    Edit name
                                </span>
                        </span>
                    </div>
                    <div/>
                </div>
                <div>
                    <div>
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

                 <h3 style={{marginTop: 10}} className="small-title">
                     Status
                 </h3>
                <p className={"modal_project__block-status"}>
                    {project.status}
                </p>
                </div>
            </div>

            <div>
                <AddMemberInProject/>
            </div>
        </div>
    )
}