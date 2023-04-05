import React, {FC} from "react";

import Dashboard from "../../modules/Dashboard/Dashboard";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

const HomePage: FC = () => {
    return (
        <PrivateLayout
            toolbar={<DashboardNav/>}
            header={<DashboardHeader/>}
        >
            <Dashboard/>
        </PrivateLayout>
    );
};

export default HomePage;