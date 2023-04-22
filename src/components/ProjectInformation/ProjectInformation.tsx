import RoundedButton from "../../UI/RoundedButton/RoundedButton";
import React, {useState} from "react";
import {PROJECT_INFORMATION} from "./_data/projectInformation";
import "./ProjectInformation.scss"
import {Progress} from "../Progress/Progress";
import ModalWindow from "../ModalWindow/ModalWindow";
import {DeskProject} from "../../modules/DeskProject/DeskProject";

export const ProjectInformation = () => {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const handleClock =() =>{
        setIsTaskOpen(true);
    }

    return (
        <div>
            <li className={"project-information_title"}>
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
                <DeskProject/>
            </ModalWindow>
        </div>
    );
};
