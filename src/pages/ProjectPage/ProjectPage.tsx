import {FC, useEffect} from "react";
import {useParams} from "react-router";
import {ColumnsProject} from "../../modules/ColumnsProject/ColumnsProject";

const ProjectPage: FC = () => {
    const {projectName} = useParams();

    return (
        <>
            Project name::: <strong>{projectName}</strong>
            <ColumnsProject/>
        </>
    );
};

export default ProjectPage;