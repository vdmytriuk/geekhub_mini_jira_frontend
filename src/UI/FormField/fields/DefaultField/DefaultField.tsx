import React, {FC, InputHTMLAttributes} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  register?: any;
  errors?: any;
}

export const DefaultField: FC<IInputProps> = (props) => {
  return (
    <>
      <input
        {...props}
        {...props.register(props.name, {required: true, pattern: props.pattern})}
      />
    </>
  )
}