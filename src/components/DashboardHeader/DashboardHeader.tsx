import React, {FC} from 'react';

import "./DashboardHeader.scss";

const DashboardHeader: FC = () => {

    return (
        <div className="dashboard-header">
            <h2 className="big-title">
                Dashboard
            </h2>
        </div>
    );
};

export default DashboardHeader;