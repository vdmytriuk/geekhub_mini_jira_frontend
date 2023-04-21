import {FC} from "react";

import './DefaultUserAvatar.scss';

interface IDefaultAvatar {
    name: string;
    last_name?: string;
}

const DefaultUserAvatar: FC<IDefaultAvatar> = ({name, last_name}) => {

    const initials = name && last_name ? name.charAt(0) + last_name.charAt(0) : name.charAt(0);

    return (
        <div className="user-avatar">

            <span>
                {initials.toUpperCase()}
            </span>

        </div>
    );
};

export default DefaultUserAvatar;