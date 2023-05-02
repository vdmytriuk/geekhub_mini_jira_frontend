import CommentsIcon from "../../assets/svg/comments.svg"
import "./CommentsInDeskTasks.scss"

export const CommentsInDeskTasks = ({comments, id}: {comments: any, id: number}) => {
    return (
        <div className={"comments-in-desk"}>
            <CommentsIcon/>
            {comments && comments[id] || 0}
        </div>
    )
}