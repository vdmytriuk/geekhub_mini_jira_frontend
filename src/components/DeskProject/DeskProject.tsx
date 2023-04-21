import {useParams} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Avatar from "../../UI/Avatar/Avatar";
import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";
import Pencil from "../../assets/svg/pencil.svg";

export const DeskProject = () => {
    const {id} = useParams()

    const projects = useTypedSelector(state => state.projects.projects);


    const oneProject = projects.filter((project) => {
            return (
                project.id === +id ? project : null
            );
        }
    )

    console.log("oneProject", oneProject)

    return (
        <div>
            {oneProject.map((project) => (
                <div key={project.id}>
                    <DefaultUserAvatar name={project.name}/>
                    <div>
                        <h1>{project.name}</h1>
                        <button className="task__edit">
                            <Pencil/>

                            <span className="small-text text-light">
                                Edit task
                            </span>
                        </button>
                    </div>
                    <div>
                       <span>
                           {project.status}
                       </span>
                    </div>
                </div>
            ))}
        </div>
    )
}