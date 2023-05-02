import React, {useState} from "react";

import {PROJECT_INFORMATION} from "./_data/projectInformation";

import {Progress} from "../Progress/Progress";
import ModalWindow from "../ModalWindow/ModalWindow";
import {DeskProject} from "../../modules/DeskProject/DeskProject";
import {MembersInProject} from "../../modules/MembersInProject/MembersInProject";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import "./ProjectInformation.scss"

export const ProjectInformation = () => {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const handleClock =() =>{
        setIsTaskOpen(true);
    }

    return (
        <div className={"project_information__modal"}>
            <li className={"project_information__modal-title"}>
                PROJECT INFORMATION
            </li>
            {PROJECT_INFORMATION.map((i) => (
                <li key={i.text}>
                    <RoundedButton
                        icon={i.icon}
                        text={i.text}
                        onClick={handleClock}
                    />
                    {i.text === "Progress" ? <Progress/> : null}
                </li>
            ))}
            <ModalWindow isOpen={isTaskOpen} onClose={() => setIsTaskOpen(false)}>
                <div className={"project_information__modal-block"}>
                    <DeskProject/>
                    <MembersInProject/>
                </div>
            </ModalWindow>
        </div>
    );
};
