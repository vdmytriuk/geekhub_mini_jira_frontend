import React, {useState} from "react";

import {ColumnsProject} from "../../modules/ColumnsProject";
import AddTask from "../../modules/AddTask/AddTask";

import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import DeskNav from "../../components/DeskNav/DeskNav";
import DeskHeader from "../../components/DeskHeader/DeskHeader";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import Task from "../../modules/Task/Task";

const ProjectPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    return (
        <>
            <PrivateLayout
                toolbar={<DeskNav/>}
                header={<DeskHeader/>}
            >
                <ColumnsProject setIsModalOpen={setIsModalOpen} setIsTaskOpen={setIsTaskOpen}/>

                <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <AddTask setIsModalOpen={setIsModalOpen}/>
                </ModalWindow>

                <ModalWindow isOpen={isTaskOpen} onClose={() => setIsTaskOpen(false)}>
                    <Task/>
                </ModalWindow>
            </PrivateLayout>
        </>
    );
};

export default ProjectPage;