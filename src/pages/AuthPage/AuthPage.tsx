import {FC} from "react";

import AuthForm from "../../modules/AuthForm/AuthForm";
import {PublicLayout} from "../../layouts/PublicLayout";

const AuthPage:FC = () => {
    return (
        <PublicLayout>
            <AuthForm/>
        </PublicLayout>
    );
};

export default AuthPage;