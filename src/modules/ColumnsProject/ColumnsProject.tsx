import {useCallback, useEffect, useState,} from 'react';

import {useParams} from "react-router";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import {TaskInBoard} from "../../components/TaskInBoard";

import {getDesksRequest} from "./api/getDesksRequest";
import {patchUpdateTasksRequest} from "./api/patchUpdateTasksRequest";

import {IColumn, IDesk} from "./types";

import "./ColumnsProject.scss";

import ToDo from "../../assets/svg/todo.svg"
import InProgress from "../../assets/svg/inProgress.svg"
import InReview from "../../assets/svg/inReview.svg"
import DoneTasks from "../../assets/svg/doneTasks.svg"

export const ColumnsProject = ({setIsModalOpen, setIsTaskOpen}: any) => {
    const {id} = useParams();

    const iconColumns = [ToDo, InProgress, InReview, DoneTasks]

    const [items, setItems] = useState<IColumn[]>([]);
    const [groups, setGroups] = useState<Record<string, number>>({});

    const [updateData, setUpdateData] = useState<{ idColumn: number, taskId: number }>({idColumn: 0, taskId: 0})

    const fetchData = useCallback(async () => {
        const data: IDesk = await getDesksRequest(+id)
        setItems(data.columns);
    }, [])

    const updateTaskPosition = async () => {
        if (updateData.taskId !== 0) {
            await patchUpdateTasksRequest(updateData.taskId, updateData.idColumn);
        }
    }

    useEffect(() => {
        updateTaskPosition();
    }, [updateData])

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, [fetchData, id])

    useEffect(() => {
        buildAndSave({items: items || []});

    }, [items]);


    function buildAndSave({items}: { items: IColumn[] }) {
        const groups: Record<string, number> = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            groups[currentGroup.id] = i;
        }

        setItems(items);

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
                    const workValue = items.slice();
                    const [deletedItem,] = workValue.splice(sourceIndex, 1);

                    workValue.splice(targetIndex, 0, deletedItem);
                    buildAndSave({items: workValue});
                    return;
                }

                const sourceDroppableIndex = groups[source.droppableId];
                const targetDroppableIndex = groups[destination.droppableId];

                const sourceItems = items[sourceDroppableIndex].tasks.slice();

                const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].tasks.slice() : sourceItems;

                const [deletedItem,] = sourceItems.splice(source.index, 1);

                targetItems.splice(destination.index, 0, deletedItem);

                const workValue = items.slice();

                workValue[sourceDroppableIndex] = {
                    ...items[sourceDroppableIndex],
                    tasks: sourceItems,
                };
                workValue[targetDroppableIndex] = {
                    ...items[targetDroppableIndex],
                    tasks: targetItems,
                };

                const valueUpdate = {
                    idColumn: items[targetDroppableIndex].id,
                    taskId: deletedItem.id
                }
                setItems(workValue);
                setUpdateData(valueUpdate)
            }}
        >
            <Droppable droppableId='TASK' type='group'>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="board_task"
                    >
                        {items.map((item, index) => (
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
