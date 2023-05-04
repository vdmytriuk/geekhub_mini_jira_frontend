import React, {useEffect, useState} from "react";

import {Draggable, Droppable} from "react-beautiful-dnd";

import {TimeInDeskTasks} from "../../UI/TimeInDeskTasks";
import {CommentsInDeskTasks} from "../../UI/CommentsInDeskTasks";

import Plus from "../../assets/svg/plus.svg";
import Description from "../../assets/svg/description.svg"

import {ITask} from "../../modules/ColumnsProject";

import {getDataTask} from "./api";

export const TaskInBoard = ({
                                id,
                                tasks,
                                name,
                                ordinal_number,
                                icon,
                                setIsModalOpen,
                                setIsTaskOpen
                            }: { id: number, tasks: ITask[], name: string, ordinal_number: number, icon: any, setIsModalOpen: any, setIsTaskOpen: any }) => {
    const tint = ordinal_number;

    const [commentLength, setCommentLength] = useState<{ [key: string]: number }>({})

    const getLengthTaskComments = () => {
        tasks.map(async (item) => {
            const taskData = await getDataTask(`${item.id}`);
            setCommentLength((prev) => ({...prev, [item.id]: taskData.comments.length}))
        })
    }

    useEffect(() => {
        getLengthTaskComments()

    }, [tasks])

    return (
        <>
            <Droppable droppableId={id.toString()}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <div className={`holder holder--tint-${tint}`}>
                            <div className='holder-title'>
                                <div className='holder-title_icon'>
                                    {icon()}
                                </div>
                                <div className='holder-title_text'>
                                    {name}

                                </div>
                            </div>
                            <div className='holder__content'>
                                <ul className='list'>
                                    {tasks?.map((item: any, index: number) => (
                                        <li
                                            className='list__item'
                                            key={item.id}
                                        >
                                            <Draggable
                                                draggableId={item.id.toString()}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        className='card'
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        onClick={() => {
                                                            const params = new URLSearchParams();
                                                            params.append('taskId', item.id + '');
                                                            const url = new URL(window.location.href);
                                                            url.search = params.toString();
                                                            window.history.replaceState({}, '', url);
                                                            setIsTaskOpen(true);
                                                        }}
                                                        ref={provided.innerRef}
                                                    >
                                                        <p className={"card_label"}>
                                                            {item.name}
                                                        </p>

                                                        <div className={"card-item_widget"}>
                                                            {/*<Avatar/>*/}
                                                            {!item.comments || !item.comments.length ?
                                                                <CommentsInDeskTasks id={item.id}
                                                                                     comments={commentLength}/> : null}
                                                            {item.description.length > 0 ?
                                                                <Description
                                                                    className={"card-item_widget__icon"}/> : null}
                                                            {item.end_date ?
                                                                <TimeInDeskTasks time={item.end_date}/> : null}

                                                        </div>

                                                    </div>
                                                )}
                                            </Draggable>
                                        </li>
                                    ))}
                                    {provided.placeholder}
                                    <li
                                        className='list__item list_add-task hover-shadow'
                                        onClick={() => {
                                            const params = new URLSearchParams();
                                            params.append('columnId', id + '');
                                            const url = new URL(window.location.href);
                                            url.search = params.toString();
                                            window.history.replaceState({}, '', url);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        <Plus className={'list_add-plus'}/>
                                        <span className={'list_add-text'}>
                                        Add card
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </Droppable>

        </>
    );
}
