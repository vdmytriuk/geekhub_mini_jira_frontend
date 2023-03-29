import {FC, ReactNode} from "react";
import {Navigate} from "react-router";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import PrivateView from "../../views/PrivateView/PrivateView";

interface IPrivateRoute {
    children: ReactNode;
}

const PrivateRoute:FC<IPrivateRoute> = ({children}) => {
    const isAuth = useTypedSelector(state => state.user.isAuth);

    if (isAuth) {
        return <PrivateView>{children}</PrivateView>
    }

    return <Navigate to={ROUTER.AUTH}/>;
};

export default PrivateRoute;