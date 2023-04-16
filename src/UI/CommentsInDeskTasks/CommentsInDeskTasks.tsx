import CommentsIcon from "../../assets/svg/comments.svg"
import "./CommentsInDeskTasks.scss"

export const CommentsInDeskTasks = ({comments}: {comments: number}) => {
    return (
        <div className={"comments-in-desk"}>
            <CommentsIcon/>
            {comments}
        </div>
    )
}