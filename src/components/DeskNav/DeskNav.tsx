import React from 'react';

import {ProjectInformation} from "../ProjectInformation/ProjectInformation";

import "../DashboardNav/DashboardNav.scss";

const DeskNav = () => {

    return (
        <nav className="dashboard-nav">
            <ul className="dashboard-nav__list">
                <ProjectInformation/>
            </ul>
        </nav>
    );
};

export default DeskNav;