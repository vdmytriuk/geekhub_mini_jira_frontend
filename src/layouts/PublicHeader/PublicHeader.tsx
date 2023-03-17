import {FC} from "react";
import {Link} from "react-router-dom";

import {ROUTER} from "../../common/config/router";

import Logo from "../../assets/svg/logo.svg";

import AppContainer from "../AppContainer/AppContainer";

import "./PublicHeader.scss";

const PublicHeader: FC = () => {
    return (
        <header className="public-header">
            <AppContainer>
                <Link to={ROUTER.WELCOME}>
                    <Logo/>
                </Link>
            </AppContainer>
        </header>
    );
};

export default PublicHeader;