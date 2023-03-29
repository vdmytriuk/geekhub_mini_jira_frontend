import {FC} from "react";
import {useLocation} from "react-router";

import {APP_NAV} from "./_data/appNav";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import "./AppToolbar.scss";


const AppToolbar: FC = () => {
    const {pathname} = useLocation();

    return (
        <aside className="app-toolbar">
            <nav className="app-toolbar__nav">
                <ul className="app-toolbar__list">
                    {APP_NAV.map(i => (
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
        </aside>
    );
};

export default AppToolbar;