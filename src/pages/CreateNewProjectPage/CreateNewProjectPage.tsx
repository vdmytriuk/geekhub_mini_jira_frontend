import React, {FC} from "react";

import {CreateProject} from "../../modules/CreateProject/CreateProject";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

export const CreateNewProjectPage: FC = () => {
    return (
        <PrivateLayout
            toolbar={<DashboardNav/>}
            header={<DashboardHeader/>}
        >
            <CreateProject/>
        </PrivateLayout>
    )
}