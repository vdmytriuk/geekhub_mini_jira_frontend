import React, {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import Logo from "../../assets/svg/logo.svg";

import "./PrivateHeader.scss";

const PrivateHeader: FC = () => {
    const {first_name,last_name} = useTypedSelector(state => state.user);

    return (
        <header className="private-header">
            <Link to={ROUTER.HOME}>
                <Logo/>
            </Link>

            <Link to={ROUTER.USER_PROFILE}>
                <DefaultUserAvatar
                    name={first_name}
                    last_name={last_name}
                    width="50px"
                    height="50px"
                    fontSize="2.1rem"
                    color="#8A38F5"
                    backgroundColor={"#F6F1F1"}
                />
            </Link>

        </header>
    );
};

export default PrivateHeader;