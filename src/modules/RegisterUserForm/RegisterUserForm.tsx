import {FC, FormEvent, useState} from "react";
import {Link} from "react-router-dom";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";

import "./RegisterUserForm.scss"
import {
    EMAIL_ERROR_TEXT,
    EMAIL_REG_EXP,
    NAME_ERROR_TEXT,
    NAME_REG_EXP,
    PASS_ERROR_TEXT,
    PASS_REG_EXP
} from "../AuthForm/lib";
import {registerUserRequest} from "./api";

const DEFAULT_REGISTER_DATA = {
    firstName: 'TestName',
    lastName: 'LastTest',
    email: 'test@test.test',
    password: '12345QwE!',
    confirmPassword: '12345QwE!',
};
const RegisterUserForm: FC = () => {
    const [registerUser, setRegisterUser] = useState(DEFAULT_REGISTER_DATA);
    const handleChangeInput = (value: string, name: string) => {
        setRegisterUser((prev) => ({...prev, [name]: value}))
    }
    const handleSubmitRegisterData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUserRequest({...registerUser});
    }

    return (
        <div className={"register-user"}>
            <form onSubmit={handleSubmitRegisterData} className={"register-user_form"}>
                <legend className={"register-user_form__legend"}>
                    <h2 className={"register-user_form__title register-user_form__text"}>
                        Welcome aboard!
                    </h2>

                    <p className={"register-user_form__text"}>
                        Let&apos;s set up your account.
                    </p>
                </legend>
                <div className={"register-user_form__fields"}>
                    <div className={"register-user_form__fields___name"}>
                        <FormField
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={registerUser.firstName}
                            pattern={NAME_REG_EXP}
                            errorPrompt={NAME_ERROR_TEXT}
                            setValue={handleChangeInput}
                            required
                        />

                        <FormField
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={registerUser.lastName}
                            pattern={NAME_REG_EXP}
                            errorPrompt={NAME_ERROR_TEXT}
                            setValue={handleChangeInput}
                            required
                        />
                    </div>

                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={registerUser.email}
                        pattern={EMAIL_REG_EXP}
                        errorPrompt={EMAIL_ERROR_TEXT}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        value={registerUser.password}
                        pattern={PASS_REG_EXP}
                        errorPrompt={PASS_ERROR_TEXT}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={registerUser.confirmPassword}
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

            <div className={"register-user_bottom text"}>
                <p className={"register-user_bottom__text text"}>
                    By continuing, you agree to our <a href="#">Terms of Service.</a>
                </p>

                <p className={"register-user_bottom__text text"}>
                    Read our <a href="#">Privacy Policy.</a>
                </p>

                <p className={"register-user_bottom__text text"}>
                    Already have an account? <Link to={`${ROUTER.AUTH}`}>Log in here</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterUserForm