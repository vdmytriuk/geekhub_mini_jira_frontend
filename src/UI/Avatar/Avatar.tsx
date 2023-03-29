import "./Avatar.scss";

import avatar from "../../assets/images/avatar.png";

const Avatar = () => {
    return (
        <div className="avatar">
            <img
                src={avatar}
                alt="Avatar"
                loading="lazy"
            />
        </div>
    );
};

export default Avatar;