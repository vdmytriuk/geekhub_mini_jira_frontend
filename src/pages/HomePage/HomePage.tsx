import React, {FC} from "react";

import Dashboard from "../../modules/Dashboard/Dashboard";
import {CreateProjectBoar} from "../../UI/CreateProjectBoard/CreateProjectBoard";
import {Link} from "react-router-dom";
import {ROUTER} from "../../common/config/router";

const HomePage: FC = () => {
    return (
        <>
            {/*<Link to={ROUTER.CREATE_PROJECT}>*/}
            {/*    <CreateProjectBoar>*/}
            {/*        Create new project <br/>*/}
            {/*        Invite people and start new project*/}
            {/*    </CreateProjectBoar>*/}
            {/*</Link>*/}
            <Dashboard/>
        </>
    );
};

export default HomePage;