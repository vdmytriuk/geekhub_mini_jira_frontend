import React from "react";

import './input.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name?: string;
  required?: boolean;
}

export const Input = (props: IInput) => {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input {...props} className="input"/>
    </div>
  )
}