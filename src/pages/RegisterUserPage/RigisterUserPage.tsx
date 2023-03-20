import {FC} from "react";
import RegisterUserForm from "../../modules/RegisterUserForm/RegisterUserForm";
import {PublicLayout} from "../../layouts/PublicLayout";
const RegisterUserPage: FC = () => {
    return (
        <PublicLayout>
            <RegisterUserForm/>
        </PublicLayout>
    )
}

export default RegisterUserPage