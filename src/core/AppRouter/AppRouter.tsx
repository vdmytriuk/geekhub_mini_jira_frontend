import {FC} from "react";
import {Navigate, Route, Routes} from "react-router";

import {ROUTER} from "../../common/config/router";

import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AuthPage from "../../pages/AuthPage/AuthPage";
import RegisterUserPage from "../../pages/RegisterUserPage/RigisterUserPage";
import HomePage from "../../pages/HomePage/HomePage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route
                path={ROUTER.WELCOME}
                element={
                    <PublicRoute>
                        <WelcomePage/>
                    </PublicRoute>
                }
            />

            <Route
                index
                path={ROUTER.AUTH}
                element={
                    <PublicRoute>
                        <AuthPage/>
                    </PublicRoute>
                }
            />

            <Route
            index
            path={ROUTER.REGISTRATION}
            element={
                <PublicRoute>
                    <RegisterUserPage/>
                </PublicRoute>
            }/>

            <Route
                index
                path={ROUTER.HOME}
                element={
                    <PrivateRoute>
                        <HomePage/>
                    </PrivateRoute>
                }
            />

            <Route
                path={ROUTER.INDEX}
                element={
                    <PublicRoute>
                        <WelcomePage/>
                    </PublicRoute>
                }
            />
            <Route
                path={ROUTER.DASHBOARD}
                element={<Navigate to={ROUTER.DASHBOARD}/>}
            />

            <Route
                path={ROUTER.ANY}
                element={<Navigate to={ROUTER.WELCOME}/>}
            />
        </Routes>
    );
};

export default AppRouter;