import * as Yup from "yup";
import {EMAIL_ERROR_TEXT, EMAIL_REG_EXP, PASS_ERROR_TEXT, PASS_REG_EXP} from "../../../common/config/validate";

export const authFormSchema = Yup.object({
  email: Yup
    .string()
    .required('Email is required field')
    .matches(EMAIL_REG_EXP, EMAIL_ERROR_TEXT),
  password: Yup
    .string()
    .required('Password is required field')
    .min(2, 'Password must be at least 2 characters')
    .matches(PASS_REG_EXP, PASS_ERROR_TEXT)
});
