import {FC, useState} from "react";

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
    const handleChangeInput = (e: any) => {
        setRegisterUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmitRegisterData = (e: any) => {
        e.preventDefault();
        // console.log(registerUser);
        //TODO:  connect BE method {name: registerUser.firstName, password: registerUser.password}
    }

    return (
        <form onSubmit={handleSubmitRegisterData} className={"register-form"}>
            <legend className={"register-form-legend"}>
                <h2 className={"register-form-title register-form-text"}>
                    Welcome aboard!
                </h2>

                <p className={"register-form-text"}>
                    Let&apos;s set up your account.
                </p>
            </legend>
            <div className={"register-form-fields"}>
                <input
                    type="text"
                    name="firstName"
                    value={registerUser.firstName}
                    onChange={handleChangeInput}
                />

                <input
                    type="text"
                    name="lastName"
                    value={registerUser.lastName}
                    onChange={handleChangeInput}
                />

                <input
                    type="email"
                    name="email"
                    value={registerUser.email}
                    onChange={handleChangeInput}
                />

                <input
                    type="password"
                    name="password"
                    value={registerUser.password}
                    onChange={handleChangeInput}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    value={registerUser.confirmPassword}
                    onChange={handleChangeInput}
                />

                <button type="submit">
                    Sign in
                </button>
            </div>

        </form>
    )
}

export default RegisterUserForm