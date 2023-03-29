import {FC, ReactNode} from "react";
import {Navigate} from "react-router";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import PublicView from "../../views/PublicView/PublicView";

interface IPublicRoute {
    children: ReactNode;
}

const PublicRoute:FC<IPublicRoute> = ({children}) => {
    const isAuth = useTypedSelector(state => state.user.isAuth);

    if (!isAuth) {
        return <PublicView>{children}</PublicView>
    }

    return <Navigate to={ROUTER.HOME}/>;
};

export default PublicRoute;