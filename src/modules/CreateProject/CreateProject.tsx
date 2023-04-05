import {FC, FormEvent, useState} from "react";

import {useNavigate} from "react-router";

import {createProjectRequest} from "./api/createProjectRequest";
import {ROUTER} from "../../common/config/router";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {createProjectFormSchema} from "../AuthForm/schema/schema";
import {yupResolver} from "@hookform/resolvers/yup";

interface ICreateProject {
    name: string;
}

export const CreateProject: FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            dirtyFields
        }
    } = useForm<ICreateProject>(
        {
            mode: 'onChange',
            resolver: yupResolver(createProjectFormSchema)
        }
    );

    const onSubmit: SubmitHandler<ICreateProject> = async (data, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createProjectRequest({name: data.name});
        navigate(ROUTER.HOME);
    }

    return (
        <div>
            <form
                className="auth-form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    label="Name Project"
                    type="text"
                    name="name"
                    register={{...register("name")}}
                    errorMessage={errors.name?.message}
                />
                <Button type="submit">
                    Create project
                </Button>
            </form>
        </div>
    )
}