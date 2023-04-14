import {FC} from "react";
import {Navigate, Route, Routes} from "react-router";

import {ROUTER} from "../../common/config/router";

import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AuthPage from "../../pages/AuthPage/AuthPage";
import RegisterUserPage from "../../pages/RegisterUserPage/RegisterUserPage";
import HomePage from "../../pages/HomePage/HomePage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import {CreateNewProjectPage} from "../../pages/CreateNewProjectPage/CreateNewProjectPage";
import TaskPage from "../../pages/TaskPage/TaskPage";

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
                path={`${ROUTER.PROJECT()}:projectName`}
                element={
                    <PrivateRoute>
                        <ProjectPage/>
                    </PrivateRoute>
                }
            />

            <Route
                path={ROUTER.TASK}
                element={
                    <PrivateRoute>
                        <TaskPage/>
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
                path={ROUTER.CREATE_PROJECT}
                element={
                    <PrivateRoute>
                        <CreateNewProjectPage/>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;