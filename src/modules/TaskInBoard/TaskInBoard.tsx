import {Draggable, Droppable} from "react-beautiful-dnd";
import React, {FC} from "react";
import Avatar from "../../UI/Avatar/Avatar";
import {Link} from "react-router-dom";
import Plus from "../../assets/svg/plus.svg";

export const TaskInBoard: FC = ({id, items, label, tint}: any) => {
    console.log(id, items)
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div className={`holder holder--tint-${tint}`}>
                        <div className='holder__title'>
                            {label}
                        </div>
                        <div className='holder__content'>
                            <ul className='list'>
                                {items.map((item: any, index: any) => (
                                    <li
                                        className='list__item'
                                        key={item.id}
                                    >
                                        <Draggable
                                            draggableId={item.id}
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
                                                        {item.label}
                                                    </p>
                                                    <div className={"card_avatar"}>
                                                        <Avatar/>
                                                    </div>

                                                </div>

                                            )}
                                        </Draggable>
                                    </li>
                                ))}

                                {provided.placeholder}
                                <li className='list__item list_add-task'>
                                    <Link to={`${id}`} >
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