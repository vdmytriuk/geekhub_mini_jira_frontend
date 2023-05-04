import {FC} from "react";
import {useRgba} from "../../hooks/useRgba";
import {useNavigate} from "react-router";

import {ROUTER} from "../../common/config/router";

import "./ProjectCard.scss";
import useRandomHexColor from "../../hooks/useRandomHexColor";

interface ProjectCardProps {
    name: string;
    status: string;
    id: number;
    lastUpdate: any;
    delay: number;
}

const ProjectCard: FC<ProjectCardProps> = ({name, id, status, delay, lastUpdate}) => {
    const navigate = useNavigate();
    const [color, linearGradient] = useRandomHexColor();
    const rgbaColor = useRgba(color, 0.1);

    const currentTime: any = new Date().toISOString();

    const date1: any = new Date(lastUpdate);
    const date2: any = new Date(currentTime);

    const diffMs = Math.abs(date2 - date1);
    const diffMin = Math.floor(diffMs / (1000 * 60 * 60));

    return (
        <div
            className="project-card hover-shadow"
            style={{animationDelay: `${delay}ms`}}
            onClick={() => navigate(ROUTER.PROJECT_VIEW + id)}
        >
            <div
                className="project-card__top"
                style={{
                    backgroundColor: "var(--primary-color)",
                    background: linearGradient
                }}
            >
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
                        {status}
                    </p>
                </div>

                <div className="project-card__info">
                    <p className="small-title">
                        {name}
                    </p>
                </div>

                <div className="project-card__bottom">
                    <p className="gray-text">
                        Project created <strong style={{color: "var(--primary-color)"}}>{diffMin}</strong> hours ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;