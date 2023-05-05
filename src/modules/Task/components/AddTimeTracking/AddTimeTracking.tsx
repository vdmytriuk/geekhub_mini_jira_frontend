import {FormEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";
import {
    intervalToMinutes,
    minutesToInterval,
    parseInterval,
} from "../../../../hooks/useIntervalToMinutes";

import {addTimeTracking} from "../../api/addTimeTracking";

import {FormField} from "../../../../UI/FormField/FormField";
import {Button} from "../../../../UI/Button/Button";

import {ITimeTracking} from "../../types";

import "./AddTimeTracking.scss";


const AddTimeTracking = () => {
    const dispatch = useTypedDispatch();
    const task = useTypedSelector(state => state.task);

    const {register, handleSubmit} = useForm<ITimeTracking>();

    const handleSubmitTrackingTime: SubmitHandler<ITimeTracking> = async (timeTracking, e: FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        //
        // await dispatch(addTimeTracking(timeTracking, task.id));
        e.preventDefault();

        const existingTime = task.time_work || '0m';

        const existingMinutes = intervalToMinutes(existingTime) || 0;

        const newMinutes = parseInterval(timeTracking.time_work) || 0;

        const totalMinutes = existingMinutes + newMinutes;

        const totalTime = minutesToInterval(totalMinutes);

        const updatedTask = {
            ...task,
            time_work: totalTime
        };

        await dispatch(addTimeTracking(dispatch, updatedTask, task.id));
    }
    return (
        <form className="add-time-tracking" onSubmit={handleSubmit(handleSubmitTrackingTime)}>
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