import * as Yup from "yup";

export const addTaskSchema = Yup.object({
    title: Yup
        .string()
        .required('Task name is required field')
});