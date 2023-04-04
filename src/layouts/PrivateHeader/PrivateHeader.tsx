import {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {userActions} from "../../store/user";

import {ROUTER} from "../../common/config/router";

import Logo from "../../assets/svg/logo.svg";

import Avatar from "../../UI/Avatar/Avatar";

import "./PrivateHeader.scss";

const PrivateHeader: FC = () => {
    const dispatch = useTypedDispatch();

    return (
        <header className="private-header">
            <Link to={ROUTER.HOME}>
                <Logo/>
            </Link>

            <Avatar/>
        </header>
    );
};

export default PrivateHeader;