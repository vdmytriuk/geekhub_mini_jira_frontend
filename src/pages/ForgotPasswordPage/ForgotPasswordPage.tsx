import {FC} from "react";
import {PublicLayout} from "../../layouts/PublicLayout";
import {ForgotPasswordForm} from "../../modules/ForgotPasswordForm";
export const ForgotPasswordPage: FC = () => {
    return (
        <PublicLayout>
            <ForgotPasswordForm/>
        </PublicLayout>
    )
}

