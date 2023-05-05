import {FC} from "react";
import {Navigate, Route, Routes} from "react-router";

import {ROUTER} from "../../common/config/router";

import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AuthPage from "../../pages/AuthPage/AuthPage";
import HomePage from "../../pages/HomePage/HomePage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import UserProfilePage from "../../pages/UserProfilePage/UserProfilePage";
import RegisterUserPage from "../../pages/RegisterUserPage/RegisterUserPage";
import {NewPasswordPage} from "../../pages/NewPasswordPage/NewPasswordPage";
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage";


const AppRouter: FC = () => {
    return (
        <Routes>
            <Route
                index
                path={ROUTER.WELCOME}
                element={
                    <PublicRoute>
                        <WelcomePage/>
                    </PublicRoute>
                }
            />

            <Route
                path={ROUTER.PROJECT}
                element={
                    <PrivateRoute>
                        <ProjectPage/>
                    </PrivateRoute>
                }
            />

            <Route
                path={ROUTER.AUTH}
                element={
                    <PublicRoute>
                        <AuthPage/>
                    </PublicRoute>
                }
            />

            <Route
                path={ROUTER.REGISTRATION}
                element={
                    <PublicRoute>
                        <RegisterUserPage/>
                    </PublicRoute>
                }/>

            <Route
                path={ROUTER.FORGOT_PASSWORD}
                element={
                    <PublicRoute>
                        <ForgotPasswordPage/>
                    </PublicRoute>
                }
            />

            <Route
                path={ROUTER.NEW_PASSWORD}
                element={
                    <PublicRoute>
                        <NewPasswordPage/>
                    </PublicRoute>
                }
            />

            <Route
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
                path={ROUTER.ANY}
                element={<Navigate to={ROUTER.WELCOME}/>}
            />

            <Route
                path={ROUTER.USER_PROFILE}
                element={
                    <PrivateRoute>
                        <UserProfilePage/>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;