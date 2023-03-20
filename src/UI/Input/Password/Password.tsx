import React, {FC, InputHTMLAttributes, useState} from "react";

import Eye from "../../../assets/svg/eye.svg";
import EyeSlash from "../../../assets/svg/eye-slash.svg";

import './Password.scss';
import '../FormField/FormField.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  setValue?: any;
}

const EyePass = (props: any) => {
  return (<Eye {...props}/>)
};

const EyeSlashPass = (props: any) => {
  return (<EyeSlash {...props}/>)
}

export const Password: FC<IInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const Icon = showPassword ? EyePass : EyeSlashPass;

  return (
    <div className="password-wrap">
      <input
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="field__input"
      />
      <button
        type='button'
        className='input__toggle'
        onClick={() => setShowPassword(!showPassword)}
        aria-label='Toggle show password'
        aria-hidden="true"
      >
        <Icon className='input__toggle-icon'/>
      </button>
    </div>
  )
}