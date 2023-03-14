import React from "react";

import './Button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
  return (
    <div>
      <button {...props} className="button"/>
    </div>
  )
}