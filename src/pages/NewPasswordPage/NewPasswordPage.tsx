import {FC} from "react";
import {PublicLayout} from "../../layouts/PublicLayout";
import {NewPasswordForm} from "../../modules/NewPasswordForm";
export const NewPasswordPage: FC = () => {
    return (
        <PublicLayout>
            <NewPasswordForm/>
        </PublicLayout>
    )
}

