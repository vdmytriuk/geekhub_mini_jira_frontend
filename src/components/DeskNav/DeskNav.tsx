import React from 'react';
import {useLocation} from "react-router";

import {DESK_NAV} from "./_data/deskNav";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";
import {ProjectInformation} from "../ProjectInformation/ProjectInformation";

import "../DashboardNav/DashboardNav.scss";

const DeskNav = () => {
    const {pathname} = useLocation();

    return (
        <nav className="dashboard-nav">
            <ul className="dashboard-nav__list">
                {DESK_NAV.map(i => (
                    <li key={i.text}>
                        <RoundedButton
                            icon={i.icon}
                            active={pathname === i.anchor}
                            text={i.text}
                            anchor={i.anchor}
                        />
                    </li>
                ))}
                <ProjectInformation/>
            </ul>
        </nav>
    );
};

export default DeskNav;