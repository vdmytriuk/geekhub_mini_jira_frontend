import {FC, FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {ROUTER} from "../../common/config/router";

import {registerUserRequest} from "./api";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {
  EMAIL_ERROR_TEXT,
  EMAIL_REG_EXP,
  NAME_ERROR_TEXT,
  NAME_REG_EXP, PASS_ERROR_TEXT,
  PASS_REG_EXP
} from "../../common/config/validate";

import {IUserRegisterData} from "./types";

import "./RegisterUserForm.scss"

const DEFAULT_REGISTER_DATA = {
  firstName: 'TestName',
  lastName: 'LastTest',
  email: 'test@test.test',
  password: '12345QwE!',
  confirmPassword: '12345QwE!',
};

const registerUserSchema = Yup.object({
  firstName: Yup
    .string()
    .required('First name is required field')
    .matches(NAME_REG_EXP, NAME_ERROR_TEXT),
  lastName: Yup
    .string()
    .required('First name is required field')
    .matches(NAME_REG_EXP, NAME_ERROR_TEXT),
  email: Yup
    .string()
    .required('Email is required field')
    .matches(EMAIL_REG_EXP, EMAIL_ERROR_TEXT),
  password: Yup
    .string()
    .required('Password is required field')
    .min(2, 'Password must be at least 2 characters')
    .matches(PASS_REG_EXP, PASS_ERROR_TEXT),
  confirmPassword: Yup
    .string()
    .required('Confirm password is required field')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const RegisterUserForm: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      dirtyFields
    }
  } = useForm<IUserRegisterData>(
    {
      mode: 'onChange',
      resolver: yupResolver(registerUserSchema)
    }
  );

  const handleSubmitRegisterData: SubmitHandler<IUserRegisterData> =
    (data, e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(registerUserRequest(data));
    }

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