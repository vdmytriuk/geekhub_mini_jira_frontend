import React, {useState} from "react";

import {ColumnsProject} from "../../modules/ColumnsProject";
import AddTask from "../../modules/AddTask/AddTask";

import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DeskNav from "../../components/DeskNav/DeskNav";
import DeskHeader from "../../components/DeskHeader/DeskHeader";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const ProjectPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <PrivateLayout
                toolbar={<DeskNav/>}
                header={<DeskHeader/>}
            >
                <ColumnsProject setIsModalOpen={setIsModalOpen}/>

                <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <AddTask setIsModalOpen={setIsModalOpen}/>
                </ModalWindow>
            </PrivateLayout>
        </>
    );
};

export default ProjectPage;