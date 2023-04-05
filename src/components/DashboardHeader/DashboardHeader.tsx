import React, {FC} from 'react';
import {useNavigate} from "react-router";

import {ROUTER} from "../../common/config/router";

import SecondaryButton from "../../UI/SecondaryButton/SecondaryButton";

import "./DashboardHeader.scss";

const DashboardHeader: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-header">
            <h2 className="big-title">
                Dashboard
            </h2>

            <SecondaryButton onClick={() => navigate(ROUTER.CREATE_PROJECT)}>
                Add new project
            </SecondaryButton>
        </div>
    );
};

export default DashboardHeader;