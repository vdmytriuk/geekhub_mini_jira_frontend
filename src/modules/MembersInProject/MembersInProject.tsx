import {useTypedSelector} from "../../hooks/useTypedSelector";

import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import "./MembersInProject.scss"

export const MembersInProject = () => {

    const {memberships} = useTypedSelector(state => state.memberships);

    return (
        <div>
            <h3>Team Members</h3>
            <div className={"member_block"}>
                {memberships?.map(member => (
                    <div key={member.id} className={"member_block__item"}>
                        <DefaultUserAvatar
                            name={member.first_name}
                            width="4.6rem"
                            height="4.6rem"
                            fontSize="2.1rem"
                            color="#8A38F5"
                            backgroundColor={member.role === "admin" ? "#F6F1F1" : "#EFE3FF"}
                        />
                        <div className={"member_block__information"}>
                            <p>
                                {member.first_name}
                            </p>
                            <p>
                                {member.email}
                            </p>
                        </div>

                        <div className={"member_block__role"} style={{backgroundColor:  member.role === "admin" ? "#F1FFE3" : "#FFF4E4", color: member.role === "admin" ? "#83BF6E" : "#F2A84C"}}>
                            <p>
                                {member.role}

                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}