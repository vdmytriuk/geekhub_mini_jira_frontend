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
  pattern?: any;
}

export const FormField: FC<IInputProps> = ({
                                             value,
                                             setValue,
                                             label,
                                             name,
                                             type,
                                             pattern,
                                             required,
                                             ...rest
                                           }) => {
  const [errorText, setErrorText] = useState('Required field');
  const [error, setError] = useState(false);

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setError(true);
        break;
      case 'password':
        setError(true);
        break;
      case 'firstName':
        setError(true);
        break;
      case 'lastName':
        setError(true);
    }
  }

  const onChange = (inputValue: string) => {
    setValue(inputValue);

    if (!new RegExp(pattern).test(value)) {
      setError(true);
      setErrorText('Invalid value');
    } else {
      setError(false);
      setErrorText('');
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
        value={value}
        name={name}
        id={name}
        type={type}
        onBlur={e => blurHandler(e)}
        onChange={e => onChange(e.target.value)}
        className={type === 'checkbox' ? 'field__checkbox' : 'field__input'}
      />
      {type === 'checkbox' &&
        <label
          htmlFor={name}
          className="checkbox__label"
        >
          {label}
        </label>}
      {error && <span className={"field__prompt"}>{errorText}</span>}
    </div>
  );
}