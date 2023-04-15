import React, {FC} from "react";

import Task from "../../modules/Task/Task";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

const TaskPage: FC = () => {
    return (
        <PrivateLayout
            toolbar={<DashboardNav/>}
            header={<DashboardHeader/>}
        >
            <Task/>
        </PrivateLayout>
    );
};

export default TaskPage;