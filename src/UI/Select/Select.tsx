import {FC} from "react";

import {ISelectProps} from "./types";

import './Select.scss';

const Select: FC<ISelectProps> = ({options, defaultValue, label, name, register}) => {
    return (
        <div className="field">
            <label
                className="field__label"
                htmlFor={name}
            >
                {label}
            </label>

            <select
                {...register}
                className="field__select"
                defaultValue={defaultValue}
                name={name}
                id={name}
            >

                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
                
            </select>
        </div>
    );
};

export default Select;