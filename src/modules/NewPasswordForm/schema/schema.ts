import * as Yup from "yup";
import {PASS_ERROR_TEXT, PASS_REG_EXP} from "../../../common/config/validate";

export const newPasswordSchema = Yup.object({
    token: Yup
        .string(),

    password: Yup
        .string()
        .required('Email is required field')
        .matches(PASS_REG_EXP, PASS_ERROR_TEXT)
});