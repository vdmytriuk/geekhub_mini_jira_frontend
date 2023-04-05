import {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import {getProjectsRequest} from "./api";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SecondaryButton from "../../UI/SecondaryButton/SecondaryButton";

import "./Dashboard.scss";

const Dashboard: FC = () => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const projects = useTypedSelector(state => state.projects.projects);

    useEffect(() => {
        dispatch(getProjectsRequest());
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <h2 className="big-title">
                    Dashboard
                </h2>

                <SecondaryButton onClick={() => navigate(ROUTER.CREATE_PROJECT)}>
                    Add new project
                </SecondaryButton>
            </div>

            <div className="dashboard__grid">
                {projects.map(project => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        color={"#0066FF"}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;