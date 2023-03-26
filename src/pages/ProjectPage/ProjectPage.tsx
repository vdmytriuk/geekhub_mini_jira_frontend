import {FC, useEffect} from "react";
import {useParams} from "react-router";

const ProjectPage: FC = () => {
    const {projectName} = useParams();

    return (
        <>
            Project name::: <strong>{projectName}</strong>
        </>
    );
};

export default ProjectPage;