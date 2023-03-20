import {FC, useState} from "react";
import {Link} from "react-router-dom";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";

import "./RegisterUserForm.scss"

const DEFAULT_REGISTER_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
const RegisterUserForm: FC = () => {
    const [registerUser, setRegisterUser] = useState(DEFAULT_REGISTER_DATA);
    const handleChangeInput = (value: string, name: string) => {
        setRegisterUser((prev) => ({...prev, [name]: value}))
    }

    const handleSubmitRegisterData = (e: any) => {
        e.preventDefault();
        console.log(registerUser);
        //TODO:  connect BE method {name: registerUser.firstName, password: registerUser.password}
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
                    <FormField
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={registerUser.firstName}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={registerUser.lastName}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={registerUser.email}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        value={registerUser.password}
                        setValue={handleChangeInput}
                        required
                    />

                    <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={registerUser.confirmPassword}
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