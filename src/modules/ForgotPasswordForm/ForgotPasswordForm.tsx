import {FC, FormEvent} from "react";
import {Link} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";
import {FormField} from "../../UI/FormField/FormField";

import {forgotPasswordRequest} from "./api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {forgotPasswordSchema} from "./schema/schema";

import {IForgotPasswordData} from "./types";

import "./ForgotPasswordForm.scss"
import {useNavigate} from "react-router";

export const ForgotPasswordForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            dirtyFields
        }
    } = useForm<IForgotPasswordData>(
      {
          mode: 'onChange',
          resolver: yupResolver(forgotPasswordSchema)
      }
    );

    const handleSubmitForgotPasswordData: SubmitHandler<IForgotPasswordData> =
      (data, e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
          dispatch(forgotPasswordRequest(data));

          navigate(ROUTER.NEW_PASSWORD);
      }

    return (
        <div className={"forgot-user-password"}>
            <form onSubmit={handleSubmit(handleSubmitForgotPasswordData)} className={"forgot-user-password_form"}>
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
                      type="email"
                      name="email"
                      register={{...register("email")}}
                      errorMessage={errors.email?.message}
                      success={dirtyFields.email && !errors.email ? 1 : 0}
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
                <p className={"forgot-user-password_bottom__text text"}>
                    You received a token in the mail? <Link className="text" to={ROUTER.NEW_PASSWORD}>
                        Have new token
                    </Link>
                </p>
            </div>
        </div>
    )
}
