import {FC, useState} from "react";

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

    return (
        <form action="" className={"register-form"}>
            <h2>
                Welcome aboard!
            </h2>

            <p>
                Let&apos;s set up your account.
            </p>
            <label></label>
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
        </form>
    )
}

export default RegisterUserForm