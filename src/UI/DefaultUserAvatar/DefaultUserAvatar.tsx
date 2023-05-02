import {FC} from "react";

import './DefaultUserAvatar.scss';

interface IDefaultAvatar {
    name: string;
    first_name?: string
    width?: string,
    height?: string,
    fontSize?: string,
    backgroundColor?: string,
    color?: string,
    last_name?: string;
}


const DefaultUserAvatar: FC<IDefaultAvatar> = (
    {
        name,
        last_name,
        width,
        height,
        fontSize,
        backgroundColor,
        color
    }) => {
    const initials = name && last_name ? name.charAt(0) + last_name.charAt(0) : name.charAt(0);

    const style = {
        width: width || '5rem',
        height: height || '5rem',
        fontSize: fontSize || '2.4rem',
        backgroundColor: backgroundColor || 'var(--primary-color)',
        color: color || 'var(--bg-color)'
    };

    return (
        <div className="user-avatar" style={style}>

            <span>
                {initials.toUpperCase()}
            </span>

        </div>
    );
};

export default DefaultUserAvatar;