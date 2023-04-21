import {useLocation, useParams} from "react-router";
import RoundedButton from "../../UI/RoundedButton/RoundedButton";
import React, {useState} from "react";
import {PROJECT_INFORMATION} from "./_data/projectInformation";
import "./ProjectInformation.scss"
import {Progress} from "../Progress/Progress";
import Task from "../../modules/Task/Task";
import ModalWindow from "../ModalWindow/ModalWindow";
import {DeskProject} from "../DeskProject/DeskProject";

export const ProjectInformation = () => {
    const {pathname} = useLocation();
    const{id} = useParams()

    const [isTaskOpen, setIsTaskOpen] = useState(false);

    console.log(id)

    const handleClock =() =>{
        console.log('nnnjjnjn')
        setIsTaskOpen(true);
    }

    return (
        <>
            <li className={"project-information_title"}>
                PROJECT_INFORMATION
            </li>
            {PROJECT_INFORMATION.map((i) => (
                <li key={i.text}>
                    <RoundedButton
                        icon={i.icon}
                        // active={pathname === i.anchor}
                        text={i.text}
                        onClick={handleClock}


                    />
                    {i.text === "Progress" ? <Progress/> : null}
                </li>
            ))}
            <ModalWindow isOpen={isTaskOpen} onClose={() => setIsTaskOpen(false)}>
                <DeskProject/>
            </ModalWindow>
        </>
    );
};
