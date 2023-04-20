import React, {FC} from 'react';
import {useParams} from "react-router";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import "../DashboardHeader/DashboardHeader.scss";

const DeskHeader: FC = () => {
    const {id} = useParams();
    const projects = useTypedSelector(state => state.projects.projects);

    const searchProject = (id: string) => {
        return (
            projects.filter(project => project.id === +id
            )
        )
    }

    const projectName = searchProject(id)

    return (
        <div className="dashboard-header">
            <h2 className="big-title">
                {projectName[0].name}
            </h2>

        </div>
    );
};

export default DeskHeader;