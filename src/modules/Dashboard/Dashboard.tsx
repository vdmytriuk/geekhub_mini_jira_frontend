import {FC, useEffect} from "react";
import {Link} from "react-router-dom";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import {getProjectsRequest} from "./api";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {CreateProjectBoard} from "../../UI/CreateProjectBoard/CreateProjectBoard";

import "./Dashboard.scss";

const Dashboard: FC = () => {
    const dispatch = useTypedDispatch();
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
            </div>

            <Link to={ROUTER.CREATE_PROJECT}>
                <CreateProjectBoard/>
            </Link>

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