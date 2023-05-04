import {FC, FormEvent, useEffect} from "react";
import {Link} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";

import {registerUserRequest} from "./api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {registerUserSchema} from "./schema/schema";

import {IUserRegisterData} from "./types";

import "./RegisterUserForm.scss"

const RegisterUserForm: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    clearErrors,
    formState: {
      errors,
      dirtyFields,
    }
  } = useForm<IUserRegisterData>(
    {
      mode: 'onChange',
      resolver: yupResolver(registerUserSchema)
    }
  );

  const password = watch('password');

  useEffect(() => {
    if (password && dirtyFields.confirmPassword) {
      trigger('confirmPassword');
      clearErrors('confirmPassword');
    }
  }, [password, clearErrors, trigger]);

  const handleSubmitRegisterData: SubmitHandler<IUserRegisterData> =
    (data, e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(registerUserRequest(dispatch, data));

    };

  return (
    <div className={"register-user"}>
      <form onSubmit={handleSubmit(handleSubmitRegisterData)} className={"register-user_form"}>
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
            register={{...register("firstName")}}
            errorMessage={errors.firstName?.message}
            success={dirtyFields.firstName && !errors.firstName ? 1 : 0}
          />

          <FormField
            label="Last Name"
            type="text"
            name="lastName"
            register={{...register("lastName")}}
            errorMessage={errors.lastName?.message}
            success={dirtyFields.lastName && !errors.lastName ? 1 : 0}
          />

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

          <FormField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={{...register("confirmPassword")}}
            errorMessage={errors.confirmPassword?.message}
            success={dirtyFields.confirmPassword && !errors.confirmPassword ? 1 : 0}
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
  );
};

export default RegisterUserForm