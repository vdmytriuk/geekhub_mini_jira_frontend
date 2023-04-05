import React from 'react';
import {useLocation} from "react-router";

import {DASH_NAV} from "./_data/dashNav";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import "./DashboardNav.scss";


const DashboardNav = () => {
    const {pathname} = useLocation();

    return (
        <nav className="dashboard-nav">
            <ul className="dashboard-nav__list">
                {DASH_NAV.map(i => (
                    <li key={i.text}>
                        <RoundedButton
                            icon={i.icon}
                            active={pathname === i.anchor}
                            text={i.text}
                            anchor={i.anchor}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DashboardNav;