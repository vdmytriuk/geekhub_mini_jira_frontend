import React, {FC, InputHTMLAttributes, useState} from "react";

import useFormField from "../../../hooks/useFormField";

import './FormField.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  value?: string;
  setValue?: any;
}

export const FormField: FC<IInputProps> = ({value, setValue, label, name, type, ...rest}) => {
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  const requiredCheck = () => {
    if (value.length === 0) {
      setError(true);
      setErrorText('Required field');
    } else {
      setError(false);
      setErrorText('');
    }
  }

  const handleBlurEvent = () => {
    if (type === 'checkbox') return;
    requiredCheck();
  };

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.type === 'checkbox') {
      setValue(event.target.checked)
    } else {
      setValue(event.target.value);

      if (!(event.target.value && error)) {
        setError(false);
      }
    }
  }

  const Component = useFormField(type);

  return (
    <div className={`field ${error ? "field_incorrect" : ""}`}>
      {type !== 'checkbox' &&
        <label
          htmlFor={name}
          className="field__label"
        >
          {label}
        </label>}
      <Component
        {...rest}
        name={name}
        id={name}
        type={type}
        onBlur={handleBlurEvent}
        onChange={handleChangeEvent}
        className={type === 'checkbox' ? 'field__checkbox' : 'field__input'}
      />
      {type === 'checkbox' &&
        <label
          htmlFor={name}
          className="checkbox__label"
        >
          {label}
        </label>}
      <span className={"field__prompt"}>{errorText}</span>
    </div>
  );
}