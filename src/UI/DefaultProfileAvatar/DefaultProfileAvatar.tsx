import {FC} from "react";

import './DefaultProfileAvatar.scss';

interface IDefaultAvatar {
    name: string;
    last_name: string;
}

const DefaultProfileAvatar: FC<IDefaultAvatar> = ({name, last_name}) => {
    const initials = name && last_name ? name.charAt(0) + last_name.charAt(0) : "";

    return (
        <div className="avatar">

            <span className="initials">
                {initials}
            </span>

        </div>
    );
};

export default DefaultProfileAvatar;