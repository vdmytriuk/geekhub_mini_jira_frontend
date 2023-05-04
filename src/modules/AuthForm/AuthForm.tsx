import {FC, FormEvent} from "react";
import {Link} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";

import {authUserRequest} from "./api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {authFormSchema} from "./schema/schema";

import {IUserLoginData} from "./types";

import "./AuthForm.scss";


const AuthForm: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      dirtyFields
    }
  } = useForm<IUserLoginData>(
    {
      mode: 'onChange',
      resolver: yupResolver(authFormSchema)
    }
  );

  const onSubmit: SubmitHandler<IUserLoginData> = (data, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(authUserRequest(dispatch, data));
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
          type="email"
          name="email"
          register={{...register("email")}}
          errorMessage={errors.email?.message}
          success={dirtyFields.email && !errors.email ? 1 : 0}
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