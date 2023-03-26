import {FC, useState} from "react";

import {FormField} from "../../UI/FormField/FormField";
import {NAME_ERROR_TEXT, NAME_REG_EXP} from "../../common/config/validate";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface ICreateProject {
    name: string;
    status: string;
    user_id: number | null;
}

export const CreateProject: FC = () => {
    const currentUser = useTypedSelector(state => state.user);
    const [project, createProject] = useState<ICreateProject>({
        name: '',
        status: '',
        user_id: currentUser.id,
    })

    const handleChangeInput = (value: string, name: string) => {
        createProject((prev) => ({...prev, [name]: value}))
    }

    return (
        <FormField
            label="Name Project"
            type="text"
            name="name"
            value={project.name}
            pattern={NAME_REG_EXP}
            errorPrompt={NAME_ERROR_TEXT}
            setValue={handleChangeInput}
            required
        />
    )
}