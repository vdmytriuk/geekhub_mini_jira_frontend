import {FC, useEffect, useState,} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

interface IColumnProps {
    id: string;
    label: string;
    tint: number;
    items: Array<ITaskProps>
}

interface ITaskProps {
    id: string;
    label: string;
    avatarUser: string;

}

import "./ColumnsProject.scss";
import {TaskInBoard} from "../TaskInBoard";

const DATA: IColumnProps[] = [
    {
        id: 'af1',
        label: 'To Do',
        items: [
            {
                id: "1",
                label: 'Інтеграція аутентифікації Google, Facebook, Github',
                avatarUser: "../../assets/svg/avatar.svg"
            },
            {id: "2", label: 'Specific task', avatarUser: "../../assets/svg/avatar.svg"},
            {
                id: "3",
                label: 'Remove spec. characters from form validation (register and auth)',
                avatarUser: "../../assets/svg/avatar.svg"
            },
        ],
        tint: 1,
    },
    {
        id: 'af2',
        label: 'In Progress',
        items: [
            {id: "4", label: 'Індексна (головна) сторінка', avatarUser: "../../assets/svg/avatar.svg"},
            {
                id: "5", label: 'Оновити роути до актуальних в swagger', avatarUser: "../../assets/svg/avatar.svg"
            },
            {id: "6", label: 'Тестування API', avatarUser: "../../assets/svg/avatar.svg"},
        ],
        tint: 2,
    },
    {
        id: 'af3',
        label: 'In review',
        items: [
            {id: "7", label: 'Мейлер як сторонній сервіс, інтеграція з нашим додатком', avatarUser: "../../assets/svg/avatar.svg"},
            {id: "8", label: 'Встановлення прав доступу для користувачів', avatarUser: "../../assets/svg/avatar.svg"},
        ],
        tint: 3,
    },
    {
        id: 'af4',
        label: 'Done',
        items: [
            {id: "10", label: 'Баги в rswag', avatarUser: "../../assets/svg/avatar.svg"},
            {id: "11", label: 'Базові налаштування проекту (збірка , лінтери , деплой)', avatarUser: "../../assets/svg/avatar.svg"},
            {id: "12", label: 'Swagger, перша версія, основні роути', avatarUser: "../../assets/svg/avatar.svg"},
        ],
        tint: 4,
    },
];

export const ColumnsProject = () => {
    const [items, setItems] = useState([]);
    const [groups, setGroups] = useState<any>({});

    useEffect(() => {
        // Mock an API call.
        buildAndSave({items: DATA});
    }, []);
    console.log('items', items)

    function buildAndSave({items}: { items: Array<IColumnProps> }) {
        const groups: any = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            groups[currentGroup.id] = i;
            console.log(groups);
        }

        // Set the data.
        setItems(items);

        // Makes the groups searchable via their id.
        setGroups(groups);
    }

    return (
        <DragDropContext
            onDragEnd={(result) => {
                const {destination, draggableId, source, type,} = result;

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
                const sourceItems = items[sourceDroppableIndex].items.slice();
                const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;

                // Pull the item from the source.
                const [deletedItem,] = sourceItems.splice(source.index, 1);
                targetItems.splice(destination.index, 0, deletedItem);

                const workValue = items.slice();
                workValue[sourceDroppableIndex] = {
                    ...items[sourceDroppableIndex],
                    items: sourceItems,
                };
                workValue[targetDroppableIndex] = {
                    ...items[targetDroppableIndex],
                    items: targetItems,
                };


                setItems(workValue);
            }}
        >
            <Droppable droppableId='ROOT' type='group'>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="test"
                    >
                        {items.map((item, index) => (
                            <Draggable
                                draggableId={item.id}
                                key={item.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <TaskInBoard
                                            key={item.id}
                                            {...item}
                                        />
                                    </div>
                                )}


                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}


// function DroppableList({ id, items, label, tint, }: any)
// {
//     return (
//         <Droppable droppableId={id}>
//             {(provided) => (
//                 <div
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                 >
//                     <div className={`holder holder--tint-${tint}`}>
//                         <div className='holder__title'>
//                             {label}
//                         </div>
//                         <div className='holder__content'>
//                             <ul className='list'>
//                                 {items.map((item: any, index: any) => (
//                                     <li
//                                         className='list__item'
//                                         key={item.id}
//                                     >
//                                         <Draggable
//                                             draggableId={item.id}
//                                             index={index}
//                                         >
//                                             {(provided) => (
//                                                 <div
//                                                     className='card'
//                                                     {...provided.draggableProps}
//                                                     {...provided.dragHandleProps}
//                                                     ref={provided.innerRef}
//                                                 >
//                                                     {item.label}
//                                                 </div>
//                                             )}
//                                         </Draggable>
//                                     </li>
//                                 ))}
//                                 {provided.placeholder}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Droppable>
//     );
// }