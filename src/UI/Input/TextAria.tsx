import {FC, InputHTMLAttributes, TextareaHTMLAttributes} from "react";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  setValue?: any;
}

export const TextAria:FC<ITextAreaProps> = ({name, ...rest}) => {
  return (
    <textarea name={name} id={name}></textarea>
  )
}