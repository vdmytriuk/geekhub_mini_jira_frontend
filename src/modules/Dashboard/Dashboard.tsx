import {FC, useEffect} from "react";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {getProjectsRequest} from "./api";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Dashboard.scss";

const Dashboard: FC = () => {
    const dispatch = useTypedDispatch();
    const projects = useTypedSelector(state => state.projects.projects);

    useEffect(() => {
        dispatch(getProjectsRequest(dispatch));
    }, []);

    return (
        <div className="dashboard">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    delay={index * 50}
                    status={project.status}
                    lastUpdate={project.updated_at}
                    id={project.id}
                />
            ))}
        </div>
    );
};

export default Dashboard;