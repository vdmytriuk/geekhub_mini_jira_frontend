import {
    EMAIL_ERROR_TEXT,
    EMAIL_REG_EXP, PASS_ERROR_TEXT, PASS_REG_EXP,
} from "../../common/config/validate";

import "./ForgotPasswordForm.scss"
import {FC, FormEvent, useState} from "react";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {Link} from "react-router-dom";
import {ROUTER} from "../../common/config/router";
import {forgotPasswordRequest} from "./api";

const DEFAULT_REGISTER_DATA = {
    firstName: 'TestName',
    lastName: 'LastTest',
    email: 'test@test.test',
    password: '12345QwE!',
    confirmPassword: '12345QwE!',
};

export const ForgotPasswordForm: FC = () => {

    const [forgotPasswordUser, setForgotPasswordUser] = useState(DEFAULT_REGISTER_DATA);
    const dispatch = useTypedDispatch();

    const handleChangeInput = (value: string, name: string) => {
        setForgotPasswordUser((prev) => ({...prev, [name]: value}))
    }
    const handleSubmitForgotPasswordData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(forgotPasswordRequest(forgotPasswordUser));
        console.log(forgotPasswordUser)
    }

    return (
        <div className={"forgot-user-password"}>
            <form onSubmit={handleSubmitForgotPasswordData} className={"forgot-user-password_form"}>
                <legend className={"forgot-user-password_form__legend"}>
                    <h2 className={"forgot-user-password_form__title forgot-user-password_form__text"}>
                        Forgot password?
                    </h2>

                    <p className={"forgot-user-password_form__text"}>
                        Hey, we all forget sometimes.<br/>
                        Let&apos;s get you back into your account!
                    </p>
                </legend>
                <div className={"forgot-user-password_form__fields"}>

                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={forgotPasswordUser.email}
                        pattern={EMAIL_REG_EXP}
                        errorPrompt={EMAIL_ERROR_TEXT}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        value={forgotPasswordUser.password}
                        pattern={PASS_REG_EXP}
                        errorPrompt={PASS_ERROR_TEXT}
                        setValue={handleChangeInput}
                        required
                    />

                </div>

                <Button type="submit">
                    Sign up
                </Button>

            </form>

            <div className={"forgot-user-password_bottom text"}>
                <p className={"forgot-user-password_bottom__text text"}>
                    Remember your password? <Link to={`${ROUTER.AUTH}`}>Back to log in</Link>
                </p>
            </div>
        </div>
    )
}
