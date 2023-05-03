import {FC, FormEvent} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router";

import {ROUTER} from "../../common/config/router";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";

import {createProjectRequest} from "./api/createProjectRequest";

import {schema} from "./schema/schema";

interface ICreateProject {
    name: string;
}

export const CreateProject: FC = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ICreateProject>(
      {
        resolver: yupResolver(schema)
      }
    );

    const handleSubmitCreateProject: SubmitHandler<ICreateProject> =
      async (data,  e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          // await createProjectRequest(data);

          navigate(ROUTER.HOME);
      }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitCreateProject)}>

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
    );
};