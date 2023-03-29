import React, {FC} from "react";

import Dashboard from "../../modules/Dashboard/Dashboard";
import {CreateProjectBoard} from "../../UI/CreateProjectBoard/CreateProjectBoard";
import {Link} from "react-router-dom";
import {ROUTER} from "../../common/config/router";

const HomePage: FC = () => {
    return (
        <>
            <Link to={ROUTER.CREATE_PROJECT}>
                <CreateProjectBoard/>
            </Link>
            <Dashboard/>
        </>
    );
};

export default HomePage;