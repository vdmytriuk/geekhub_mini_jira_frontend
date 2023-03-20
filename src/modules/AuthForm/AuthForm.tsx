import {FC, useState} from "react";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {userActions} from "../../store/user";

import "./AuthForm.scss";
import {FormField} from "../../UI/FormField/FormField";
import {EMAIL_ERROR_TEXT, EMAIL_REG_EXP, PASS_ERROR_TEXT, PASS_REG_EXP} from "./lib";
import {Button} from "../../UI/Button/Button";

const AuthForm: FC = () => {
    const dispatch = useTypedDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        dispatch(userActions.setUser({email, password}))
    }

    return (
        <form
            className="auth-form"
            noValidate
            onSubmit={onSubmit}
        >
            <h2 className="title">
                Hello!
            </h2>

            <p className="text">
                Ready to pick up where you left off?
                <br/>
                Use your email to continue with Kotello.
            </p>

            <FormField
                label="Email"
                type="email"
                name="email"
                value={email}
                setValue={setEmail}
                pattern={EMAIL_REG_EXP}
                errorPrompt={EMAIL_ERROR_TEXT}
            />

            <FormField
                label="Password"
                type="password"
                name="password"
                value={password}
                setValue={setPassword}
                pattern={PASS_REG_EXP}
                errorPrompt={PASS_ERROR_TEXT}
            />

            <Button type="submit">
                Sign in
            </Button>
        </form>
    );
};

export default AuthForm;