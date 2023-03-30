import {FC} from "react";
import {useRgba} from "../../hooks/useRgba";
import {useNavigate} from "react-router";

import {ROUTER} from "../../common/config/router";

import Edit from "../../assets/svg/edit.svg";
import FavoriteFilled from "../../assets/svg/favoriteFilled.svg";

import "./ProjectCard.scss";

interface ProjectCardProps {
    name: string;
    color: string;
}

const ProjectCard:FC<ProjectCardProps> = ({name, color}) => {
    const navigate = useNavigate();
    const rgbaColor = useRgba(color, 0.1);

    return (
        <div
            className="project-card"
            onClick={() => navigate(ROUTER.PROJECT(name))}
        >
            <div
                className="project-card__top"
                style={{
                    backgroundColor: color
                }}
            >
                <button className="project-card__edit">
                    <Edit/>
                </button>
            </div>

            <div className="project-card__content">
                <div
                    className="project-card__type"
                    style={{
                        backgroundColor: rgbaColor
                    }}
                >
                    <p
                        className="small-text"
                        style={{color}}
                    >
                        Part-time
                    </p>
                </div>

                <div className="project-card__info">
                    <p className="small-title">
                        {name}
                    </p>

                    <p className="gray-text">
                        A web-based tool for organizing and tracking project tasks and progress.
                    </p>
                </div>

                <div className="project-card__characteristics">
                    <p className="gray-text">
                        Tasks Done: &nbsp;

                        <span className="black-text" style={{fontWeight: 500}}>13 </span>/ 47
                    </p>

                    <div className="project-card__progress">
                        <div className="project-card__text">
                            <span className="small-bolded-text">
                                Progress:
                            </span>

                            <span className="small-bolded-text">
                                27%
                            </span>
                        </div>

                        <div className="project-card__bar">
                            <span
                                style={{
                                    backgroundColor: color,
                                    width: `27%`
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="project-card__bottom">
                    <p className="gray-text">
                        Edited 8 minutes ago
                    </p>

                    <button className="project-card__favorite">
                        <FavoriteFilled/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;