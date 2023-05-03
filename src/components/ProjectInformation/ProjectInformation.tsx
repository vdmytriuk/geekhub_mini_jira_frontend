import React, {useState} from "react";

import {PROJECT_INFORMATION} from "./_data/projectInformation";

import {Progress} from "../Progress/Progress";
import ModalWindow from "../ModalWindow/ModalWindow";
import {DeskProject} from "../../modules/DeskProject/DeskProject";
import {MembersInProject} from "../../modules/MembersInProject/MembersInProject";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import report from "../../assets/svg/report.svg";


import "./ProjectInformation.scss"
import {Button} from "../../UI/Button/Button";
import {userActions} from "../../store/user";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

export const ProjectInformation = () => {
    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const dispatch = useTypedDispatch();

    const handleClock =() =>{
        setIsTaskOpen(true);
    }

    return (
        <div className={"project_information__modal"}>
            <ul className={"project_information__modal-list"}>
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
                        {/*{i.text === "Progress" ? <Progress/> : null}*/}
                    </li>
                ))}
                <li>
                    <p className={"project_information__modal-progress"}>
                        Progress in project
                    </p>
                    <Progress/>
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

            <ModalWindow isOpen={isTaskOpen} onClose={() => setIsTaskOpen(false)}>
                <div className={"project_information__modal-block"}>
                    <DeskProject/>
                    <MembersInProject/>
                </div>
            </ModalWindow>
        </div>
    );
};
