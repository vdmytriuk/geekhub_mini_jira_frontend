import {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {userActions} from "../../store/user";

import {ROUTER} from "../../common/config/router";

import Logo from "../../assets/svg/logo.svg";

import "./PrivateHeader.scss";

const PrivateHeader: FC = () => {
    const dispatch = useTypedDispatch();

    return (
        <header className="private-header">
            <Link to={ROUTER.HOME}>
                <Logo/>
            </Link>

            <button onClick={() => dispatch(userActions.logout())}>
                logout
            </button>
        </header>
    );
};

export default PrivateHeader;