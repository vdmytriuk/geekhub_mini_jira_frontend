import React, {FC, InputHTMLAttributes, useState} from "react";
import "./ColumnsProject.scss"

export const ColumnsProject = () => {
    const [boards, setBoards] = useState(["TO DO", "In Progress", "Done"])
    const [tasks, setTasks] = useState([
        {id: 1, titleTask: 'test1', column_id: 0},
        {id: 2, titleTask: 'test2', column_id: 0},
        {id: 3, titleTask: 'test3', column_id: 0},
        {id: 4, titleTask: 'test4', column_id: 1},
        {id: 5, titleTask: 'test5', column_id: 1},
        {id: 6, titleTask: 'test6', column_id: 2}
    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)


    const dragOverHandler = (e: any, ): void => {
        e.preventDefault()
        if (e.target.className == "item") {
            e.target.style.boxShadow = "0 4px 3px gray"
        }
    }

    const dragEnd = (e: any, item: string, task: { column_id: number; id: number; titleTask: string }): void => {
        e.target.style.boxShadow = "none"
    }

    // const dragLeaveHandled = (e: any): void => {
    //     e.target.style.boxShadow = "none"
    // }
    //
    // const dragStartHandled = (e: any, item: string, task: { column_id: number; id: number; titleTask: string } ): void => {
    //     setCurrentBoard(boards)
    //     setCurrentTask(tasks)
    // }
    //
    // const dropHandled = (e: React.DragEvent<HTMLDivElement>, item: string, task: { column_id: number; id: number; titleTask: string } ): void => {
    //     e.preventDefault()
    //     const currentIndex = currentBoard.items.indexOf(currentTask)
    //     currentBoard.items.splice(currentIndex, 1)
    //
    //     const dropIndex = task.items.indexOf(currentTask)
    //     currentBoard.items.splice(currentIndex, 1)
    // }


    console.log(boards)

    return (
        <div className="board">
            {/*{boards.map((board, index) => (*/}
            {/*    <div*/}
            {/*        key={index}*/}
            {/*        className="board-block item"*/}

            {/*    >*/}
            {/*        {board}*/}

            {/*        {tasks.map((task) => {*/}
            {/*            console.log(task.column_id === index)*/}
            {/*            return task.column_id === index ? (*/}
            {/*                <div*/}
            {/*                    key={task.id}*/}
            {/*                    onDragOver={(e) => dragOverHandler(e)}*/}
            {/*                    onDragLeave={(e) => dragLeaveHandled(e)}*/}
            {/*                    onDragStart={(e) => dragStartHandled(e, item, task)}*/}
            {/*                    onDragEnd={(e) => dragEnd(e, item, task)}*/}
            {/*                    onDrop={(e) => dropHandled(e, item, task)}*/}
            {/*                    draggable={true}*/}
            {/*                    className={"item"}*/}
            {/*                >{task.titleTask}</div>*/}
            {/*            ) : null;*/}
            {/*        })}*/}

            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}