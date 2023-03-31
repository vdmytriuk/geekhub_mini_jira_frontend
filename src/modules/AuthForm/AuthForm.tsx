import {FC, FormEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {SubmitHandler, useForm} from "react-hook-form";

import {userActions} from "../../store/user";


import {ROUTER} from "../../common/config/router";

import {authUserRequest} from "./api";
import {Button} from "../../UI/Button/Button";

import {FormField} from "../../UI/FormField/FormField";
import "./AuthForm.scss";
import {EMAIL_ERROR_TEXT, EMAIL_REG_EXP, PASS_ERROR_TEXT, PASS_REG_EXP} from "../../common/config/validate";
import {IUserLoginData} from "./types";


const AuthForm: FC = () => {
    const dispatch = useTypedDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     const loginData = {email, password};
    //
    //     dispatch(authUserRequest(loginData));
    // }

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            touchedFields
        }
    } = useForm<IUserLoginData>({mode: "onChange"});

    const onSubmit: SubmitHandler<IUserLoginData> = (data, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(authUserRequest(data));
    }

    return (
        <form
            className="auth-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <legend className="auth-form__legend">
                <h2 className="title">
                    Hello!
                </h2>

                <p className="text">
                    Ready to pick up where you left off?
                    <br/>
                    Use your email to continue with Kotello.
                </p>
            </legend>

            <div className="auth-form__fields">
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  success={touchedFields.email && !errors.email ? 1 : 0}
                  errorPrompt={EMAIL_ERROR_TEXT}

                  pattern={EMAIL_REG_EXP}
                />

                <FormField
                  label="Password"
                  type="password"
                  name="password"
                  register={register}
                  errors={errors}
                  success={touchedFields.password && !errors.password ? 1 : 0}
                  errorPrompt={PASS_ERROR_TEXT}

                  pattern={PASS_REG_EXP}
                />
                {/*<FormField*/}
                {/*    label="Email"*/}
                {/*    type="email"*/}
                {/*    name="email"*/}
                {/*    value={email}*/}
                {/*    setValue={setEmail}*/}
                {/*    pattern={EMAIL_REG_EXP}*/}
                {/*    errorPrompt={EMAIL_ERROR_TEXT}*/}
                {/*    required*/}
                {/*/>*/}

                {/*<FormField*/}
                {/*    label="Password"*/}
                {/*    type="password"*/}
                {/*    name="password"*/}
                {/*    value={password}*/}
                {/*    setValue={setPassword}*/}
                {/*    pattern={PASS_REG_EXP}*/}
                {/*    errorPrompt={PASS_ERROR_TEXT}*/}
                {/*    required*/}
                {/*/>*/}
            </div>

            <Link className="text" to={ROUTER.FORGOT_PASSWORD}>
                Forgot password?
            </Link>

            <Button type="submit">
                Sign in
            </Button>

            <p className="auth-form__bottom text">
                Don’t have an account? <Link to={ROUTER.REGISTRATION}>Sign up here</Link>
            </p>
        </form>
    );
};

export default AuthForm;