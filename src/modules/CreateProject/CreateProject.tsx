import {FC, FormEvent, useState} from "react";

import {useNavigate} from "react-router";

import {createProjectRequest} from "./api/createProjectRequest";
import {ROUTER} from "../../common/config/router";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";

interface ICreateProject {
    name: string;
}

export const CreateProject: FC = () => {
    const navigate = useNavigate();

    const [project, createProject] = useState<ICreateProject>({
        name: '',
    })

    const handleChangeInput = (value: string, name: string) => {
        createProject((prev) => ({...prev, [name]: value}))
    }

    const handleSubmitCreateProject = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createProjectRequest({project: project});
        navigate(ROUTER.HOME);
    }

    return (
        <div>
            <form onSubmit={handleSubmitCreateProject}>
                <FormField
                    label="Name Project"
                    type="text"
                    name="name"
                    value={project.name}
                    setValue={handleChangeInput}
                    required
                />

                <Button type="submit">
                    Create project
                </Button>
            </form>
        </div>
    )
}