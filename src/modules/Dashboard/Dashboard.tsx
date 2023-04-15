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
        dispatch(getProjectsRequest());
    }, []);

    // console.log(projects[0].id);

    return (
        <div className="dashboard">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    color={"#0066FF"}
                />
            ))}
        </div>
    );
};

export default Dashboard;