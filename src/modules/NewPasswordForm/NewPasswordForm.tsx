import {FC, FormEvent} from "react";
import {Link} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";
import {FormField} from "../../UI/FormField/FormField";

import {newPasswordRequest} from "./api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {newPasswordSchema} from "./schema/schema";

import {INewPasswordData} from "./types";

import "./ForgotPasswordForm.scss"
import {useNavigate} from "react-router";

export const NewPasswordForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            dirtyFields
        }
    } = useForm<INewPasswordData>(
        {
            mode: 'onChange',
            resolver: yupResolver(newPasswordSchema)
        }
    );

    const handleSubmitNewPasswordData: SubmitHandler<INewPasswordData> =
        (data, e: FormEvent<HTMLFormElement>) => {

            e.preventDefault();
            dispatch(newPasswordRequest(data));

            navigate(ROUTER.HOME);
        }

    return (
        <div className={"forgot-user-password"}>
            <form onSubmit={handleSubmit(handleSubmitNewPasswordData)} className={"forgot-user-password_form"}>
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
                        label="Token"
                        type="test"
                        name="token"
                        register={{...register("token")}}
                    />

                    <FormField
                        label="Password"
                        type="password"
                        name="password"
                        register={{...register("password")}}
                        errorMessage={errors.password?.message}
                        success={dirtyFields.password && !errors.password ? 1 : 0}
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
