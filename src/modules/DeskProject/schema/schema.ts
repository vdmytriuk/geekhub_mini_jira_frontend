import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup
    .string()
    .required('Project name is required field')
});