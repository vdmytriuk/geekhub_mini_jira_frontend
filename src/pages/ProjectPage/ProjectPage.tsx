import React from "react";

import {ColumnsProject} from "../../modules/ColumnsProject";

import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DeskNav from "../../components/DeskNav/DeskNav";
import DeskHeader from "../../components/DeskHeader/DeskHeader";

const ProjectPage = () => {
    return (
        <><PrivateLayout
            toolbar={<DeskNav/>}
            header={<DeskHeader/>}
        >
            <ColumnsProject/>
        </PrivateLayout>
        </>
    );
};

export default ProjectPage;