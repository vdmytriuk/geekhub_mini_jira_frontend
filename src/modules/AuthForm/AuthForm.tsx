import {FC, useState} from "react";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {userActions} from "../../store/user";

import "./AuthForm.scss";

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

            <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">
                Sign in
            </button>
        </form>
    );
};

export default AuthForm;