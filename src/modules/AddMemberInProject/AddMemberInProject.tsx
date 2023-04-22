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
    const {members} = useTypedSelector(state => state.members);

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

            console.log("data", data)
            addTaskRequest(+data.name, id)
            dispatch(getMembersProject(id))

        }
    useEffect(() => {
        dispatch(getMembersProject(id))
    }, [id])

    console.log("members", members)

    let backgroundColor

    return (
        <div>
            <div>
                <h3>Add Member</h3>
                <form onSubmit={handleSubmit(handleSubmitEditProject)}>
                    <FormField
                        type="text"
                        name="name"
                        register={{...register("name")}}
                    />

                    <Button type="submit">
                        Add member
                    </Button>
                </form>
            </div>
            <div>
                <h3>Team Members</h3>
                <div className={"member_block"}>
                    {members.map(member => (
                        <div key={member.id} className={"member_block__item"}>
                            <DefaultUserAvatar
                                name={member.role}
                                // last_name={task.user.last_name}
                                width="4.6rem"
                                height="4.6rem"
                                fontSize="2.1rem"
                                color="#8A38F5"
                                backgroundColor={member.role === "admin" ? backgroundColor = "#F6F1F1" : backgroundColor = "#EFE3FF"}
                            />
                            <span>
                               {member.role} {member.role}
                           </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}