import {useEffect, useState,} from 'react';

import {useParams} from "react-router";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import {getDesksRequest} from "../../http/globals/getDeskRequest";
import {progressActions} from "./store/progressSlice";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";


import {TaskInBoard} from "../../components/TaskInBoard";

import {patchUpdateTasksRequest} from "./api/patchUpdateTasksRequest";


import "./ColumnsProject.scss";
import ToDo from "../../assets/svg/todo.svg"
import InProgress from "../../assets/svg/inProgress.svg"
import InReview from "../../assets/svg/inReview.svg"
import DoneTasks from "../../assets/svg/doneTasks.svg"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IColumn} from "./store/types";
import {projectActions} from "./store/projectSlice";

export const ColumnsProject = ({setIsModalOpen, setIsTaskOpen}: any) => {
    const {id} = useParams();

    const dispatch = useTypedDispatch();

    const iconColumns = [ToDo, InProgress, InReview, DoneTasks]

    const [groups, setGroups] = useState<Record<string, number>>({});
    const [updateData, setUpdateData] = useState<{ idColumn: number, taskId: number }>({idColumn: 0, taskId: 0})

    const project = useTypedSelector(state => state.project);
    const projectColumn = useTypedSelector(state => state.project.columns);

    const sumTasks = (): number => {
        let sumTasks = 0;
        let sumDoneItem = 0;

        projectColumn.map((item) => {
            sumTasks = sumTasks + item.tasks.length
            if (item.name === "Done") {
                sumDoneItem = item.tasks.length
            }

        })
        return Math.round(100 - ((sumTasks - sumDoneItem) / sumTasks * 100))
    }

    dispatch(progressActions.setProgress({width: sumTasks()}))

    const updateTaskPosition = async () => {
        if (updateData.taskId !== 0) {
            await patchUpdateTasksRequest(updateData.taskId, updateData.idColumn);
            dispatch(progressActions.setProgress({width: sumTasks()}))
        }
    }

    useEffect(() => {
        updateTaskPosition();
    }, [updateData])

    useEffect(() => {
        dispatch(getDesksRequest(dispatch, +id))
    }, [id])

    useEffect(() => {
        buildAndSave({items: project.columns || []});

    }, [project.columns]);

    function buildAndSave({items}: { items: IColumn[] }) {
        const groups: Record<string, number> = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            groups[currentGroup.id] = i;
        }

        setGroups(groups);
    }


    return (
        <DragDropContext
            onDragEnd={async (result) => {
                const {destination, source, type,} = result;

                if (!destination) {
                    return;
                }

                if (destination.droppableId === source.droppableId && destination.index === source.index) {
                    return;
                }

                if ('group' === type) {
                    const sourceIndex = source.index;
                    const targetIndex = destination.index;
                    const workValue = project.columns.slice();
                    const [deletedItem,] = workValue.splice(sourceIndex, 1);

                    workValue.splice(targetIndex, 0, deletedItem);
                    buildAndSave({items: workValue});
                    return;
                }

                const sourceDroppableIndex = groups[source.droppableId];
                const targetDroppableIndex = groups[destination.droppableId];

                const sourceItems = project.columns[sourceDroppableIndex].tasks.slice();

                const targetItems = source.droppableId !== destination.droppableId ? project.columns[targetDroppableIndex].tasks.slice() : sourceItems;

                const [deletedItem,] = sourceItems.splice(source.index, 1);

                targetItems.splice(destination.index, 0, deletedItem);

                const workValue = project.columns.slice();

                workValue[sourceDroppableIndex] = {
                    ...project.columns[sourceDroppableIndex],
                    tasks: sourceItems,
                };
                workValue[targetDroppableIndex] = {
                    ...project.columns[targetDroppableIndex],
                    tasks: targetItems,
                };

                const valueUpdate = {
                    idColumn: project.columns[targetDroppableIndex].id,
                    taskId: deletedItem.id
                }

                dispatch(projectActions.updateProject(workValue))
                setUpdateData(valueUpdate)
                console.log(valueUpdate)
            }}
        >
            <Droppable droppableId='TASK' type='group'>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="board_task"
                    >
                        {project.columns.map((item, index) => (
                            <TaskInBoard
                                setIsTaskOpen={setIsTaskOpen}
                                setIsModalOpen={setIsModalOpen}
                                key={item.id}
                                {...item}
                                icon={iconColumns[index]}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
