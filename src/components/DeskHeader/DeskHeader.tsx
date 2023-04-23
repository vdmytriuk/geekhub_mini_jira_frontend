import React, {FC} from 'react';

import {useTypedSelector} from "../../hooks/useTypedSelector";

import "../DashboardHeader/DashboardHeader.scss";


const DeskHeader: FC = () => {
    const project = useTypedSelector(state => state.project.desk.project);

    return (
        <div className="dashboard-header">
            <h2 className="big-title">
                {project.name ? project.name : null}
            </h2>

        </div>
    );
};

export default DeskHeader;