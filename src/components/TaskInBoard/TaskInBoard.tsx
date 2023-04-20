import React from "react";

import {Link} from "react-router-dom";
import {Draggable, Droppable} from "react-beautiful-dnd";

import {ClockInDeskTasks} from "../../UI/ClockInDeskTasks";
import {CommentsInDeskTasks} from "../../UI/CommentsInDeskTasks";

import Plus from "../../assets/svg/plus.svg";
import Description from "../../assets/svg/description.svg"
import {ITask} from "../../modules/ColumnsProject";


export const TaskInBoard = ({
                                id,
                                tasks,
                                name,
                                ordinal_number,
                                icon
                            }: { id: number, tasks: ITask[], name: string, ordinal_number: number, icon: any }) => {
    const tint = ordinal_number;
    console.log(tasks)

    return (
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
                                                    ref={provided.innerRef}
                                                >
                                                    <p className={"card_label"}>
                                                        {item.title}
                                                    </p>

                                                    <div className={"card-item_widget"}>
                                                        {/*<Avatar/>*/}
                                                        {!item.comments ? <CommentsInDeskTasks comments={3}/> : null}
                                                        {item.description.length > 0 ?
                                                            <Description className={"card-item_widget__icon"}/> : null}
                                                        {item.end_date ?
                                                            <ClockInDeskTasks time={item.end_date}/> : null}

                                                    </div>

                                                </div>
                                            )}
                                        </Draggable>
                                    </li>
                                ))}
                                {provided.placeholder}
                                <li className='list__item list_add-task'>
                                    <Link to={`${id}`}>
                                        <Plus className={'list_add-plus'}/>
                                        <span className={'list_add-text'}>
                                            Add card
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    );
}
