import {FormField} from "../../UI/FormField/FormField";
import {Button} from "../../UI/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {ITimeTracking} from "./types";
import {FormEvent} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {addTimeTracking} from "./api/addTimeTracking";

const AddTimeTracking = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);

    const {register, handleSubmit} = useForm<ITimeTracking>();

    const handleSubmitTrackingTime: SubmitHandler<ITimeTracking> = async (timeTracking, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await dispatch(addTimeTracking(timeTracking, task.id));
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitTrackingTime)}>
            <FormField
                placeholder="Enter time e.g. 2w, 4d, 6h, 45m"
                label="Time tracking"
                type="text"
                name="time_work"
                register={{...register("time_work")}}
            />

            <Button type="submit">
                Add time
            </Button>

        </form>
    );
};

export default AddTimeTracking;