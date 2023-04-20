import {useLocation} from "react-router";
import RoundedButton from "../../UI/RoundedButton/RoundedButton";
import React from "react";
import {PROJECT_INFORMATION} from "./_data/projectInformation";
import "./ProjectInformation.scss"
import {Progress} from "../Progress/Progress";

export const ProjectInformation = () => {
    const {pathname} = useLocation();

    return (
        <>
            <li className={"project-information_title"}>
                PROJECT_INFORMATION
            </li>
            {PROJECT_INFORMATION.map((i) => (
                <li key={i.text}>
                    <RoundedButton
                        icon={i.icon}
                        active={pathname === i.anchor}
                        text={i.text}
                        anchor={i.anchor}
                    />
                    {i.text === "Progress" ? <Progress/> : null}
                </li>
            ))}
        </>
    );
};
