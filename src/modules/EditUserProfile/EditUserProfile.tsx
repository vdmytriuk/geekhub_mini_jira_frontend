import {FC, FormEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";

import {editUserRequest} from "./api";

import {IUpdateUser} from "./types";

import './EditUserProfile.scss';

const EditUserProfile: FC = () => {
    const dispatch = useTypedDispatch();
    const user = useTypedSelector(state => state.user);
    const {register, handleSubmit} = useForm<IUpdateUser>();

    const onSubmit: SubmitHandler<IUpdateUser> = (data, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(editUserRequest(dispatch, user.id, data))
    };

    return (
        <form
            className="edit-user-form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <h2 className="title">
                Edit user information
            </h2>

            <div className="edit-user-form__fields">

                <FormField
                    label="First Name"
                    type="text"
                    name="first_name"
                    defaultValue={user.first_name}
                    register={{...register("first_name")}}
                />

                <FormField
                    label="Last Name"
                    type="text"
                    name="last_name"
                    defaultValue={user.last_name}
                    register={{...register("last_name")}}
                />

            </div>

            <Button type="submit">
                Update
            </Button>

        </form>
    );
};

export default EditUserProfile;