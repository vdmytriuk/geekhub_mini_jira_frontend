import React, {FormEvent} from 'react';
import {useLocation} from "react-router";

import {DASH_NAV} from "./_data/dashNav";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import "./DashboardNav.scss";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../modules/CreateProject/schema/schema";
import {createProjectRequest} from "../../modules/CreateProject/api/createProjectRequest";
import {ROUTER} from "../../common/config/router";
import {getProjectsRequest} from "../../modules/Dashboard/api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {userActions} from "../../store/user";


interface ICreateProject {
    name: string;
}

const DashboardNav = () => {
    const {pathname} = useLocation();
    const dispatch = useTypedDispatch();


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
        async (data, e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            await dispatch(createProjectRequest(dispatch, data));
            dispatch(getProjectsRequest(dispatch));

            // navigate(ROUTER.HOME);
        }

    return (
        <nav className="dashboard-nav">
            <ul className="dashboard-nav__list">
                {DASH_NAV.map(i => (
                    <li key={i.text}>
                        <RoundedButton
                            icon={i.icon}
                            active={pathname === i.anchor}
                            text={i.text}
                            anchor={i.anchor}
                        />
                    </li>
                ))}
                <li className={"dashboard-nav__create-project"}>
                    <p className={"dashboard-nav__create-project-label"}>
                        Create New Project
                    </p>

                    <form onSubmit={handleSubmit(handleSubmitCreateProject)}>
                        <FormField
                            type="text"
                            name="name"
                            register={{...register("name")}}
                            errorMessage={errors.name?.message}
                        />
                        <Button type="submit">
                            Create project
                        </Button>
                    </form>
                </li>
                <li>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 20,
                        }}
                    >
                        <Button onClick={() => dispatch(userActions.logout())}>
                            Logout
                        </Button>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default DashboardNav;