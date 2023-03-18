import {FC, InputHTMLAttributes} from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  setValue?: any;
}

export const Input: FC<IInputProps> = (props) => {
  return (
    <input
      {...props}
    />
  )
}