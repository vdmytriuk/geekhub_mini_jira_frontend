import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";

import {DESK_NAV} from "./_data/deskNav";

import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import "../DashboardNav/DashboardNav.scss";
import {ProjectInformation} from "../ProjectInformation/ProjectInformation";
import {IColumn, IDesk} from "../../modules/ColumnsProject";
import {getDesksRequest} from "../../hooks/getDeskRequest";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {userActions} from "../../store/user";
import {progressActions} from "../../store/progress/progressSlice";


const DeskNav = () => {
    const {pathname} = useLocation();
    const {id} = useParams();
    const [items, setItems] = useState<IColumn[]>([])
    const [progress, setProgress] = useState<number>(0)


    const fetchData = useCallback(async () => {
        const data: IDesk = await getDesksRequest(+id)
        setItems(data.columns);
    }, [])

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, [fetchData, id])


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