import React, {FC} from 'react';
import {useNavigate, useParams} from "react-router";

import {ROUTER} from "../../common/config/router";

import SecondaryButton from "../../UI/SecondaryButton/SecondaryButton";

import "../DashboardHeader/DashboardHeader.scss";

const DeskHeader: FC = () => {
    const {projectName} = useParams();


    return (
        <div className="dashboard-header">
            <h2 className="big-title">
                {projectName}
            </h2>

        </div>
    );
};

export default DeskHeader;