import * as Yup from "yup";

export const addTaskSchema = Yup.object({
    name: Yup
        .string()
        .required('Task name is required field')
});