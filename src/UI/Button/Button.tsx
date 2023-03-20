import {ButtonHTMLAttributes} from "react";

import './Button.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
  const btnEnableDisable = !props.disabled ? "btn_enable" : "btn_disabled";

  return (
    <button
      className={`btn ${btnEnableDisable}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}