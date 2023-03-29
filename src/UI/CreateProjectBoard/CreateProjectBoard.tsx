import React, {ButtonHTMLAttributes} from "react";

import Plus from "../../assets/svg/plus.svg"
import PenAdd from "../../assets/svg/penadd.svg"
import "./CreateProjectBoard.scss"

interface ICreateProjectBoardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // isLoading?: boolean;
    // isCompleted?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const CreateProjectBoard = (props: ICreateProjectBoardProps) => {

    return (
        <button
            className={`btn create-board`}
            onClick={props.onClick}
        >
            <div className={"create-board_block"}>
                <div className={"create-board_block__icon"}>
                    <PenAdd/>
                </div>
                <div className={"create-board_block__text"}>
                    Create new project <br/>
                    Invite people and start new project
                </div>
                <div className={"create-board_block__icon"}>
                    <Plus/>
                </div>
            </div>
        </button>
    )
}