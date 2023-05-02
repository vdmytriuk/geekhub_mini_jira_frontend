import {FormEvent, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router";
import {yupResolver} from "@hookform/resolvers/yup";

import {addTaskRequest} from "./api/addMemberInProject";
import {getMembersProject} from "./api/getMembersProject";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {schema} from "../CreateProject/schema/schema";

import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/FormField/FormField";
import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import "./AddMemberInProject.scss"

interface IEditProject {
    name: string;
}

export const AddMemberInProject = () => {
    const {id} = useParams()
    const dispatch = useTypedDispatch();

    const {
        register,
        handleSubmit,
    } = useForm<IEditProject>(
        {
            resolver: yupResolver(schema)
        }
    );

    const handleSubmitEditProject: SubmitHandler<IEditProject> =
        async (data, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            addTaskRequest(data.name, id)
            dispatch(getMembersProject(id))


        }
    useEffect(() => {
        dispatch(getMembersProject(id))
    }, [id])


    // console.log("memberships", memberships)
    return (
        <div>
            <div>
                <h3>Add Member</h3>
                <form onSubmit={handleSubmit(handleSubmitEditProject)} className={"form_addMembers"}>

                    <div className={"form_add__members"}>
                        <div className={"form_add__members-field"}>
                            <FormField
                                type="text"
                                name="email"
                                register={{...register("name")}}
                            />

                        </div>

                        <button
                            className={`btn form_add__members-button`}
                            type={"submit"}
                        >
                            Add member
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}