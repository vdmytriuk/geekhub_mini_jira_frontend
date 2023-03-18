import React, {FC, InputHTMLAttributes, useState} from "react";

import useFormField from "../../hooks/useFormField";

import './FormField.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  value?: string;
  setValue?: any;
}

// сьіля
// назви компонентів
// checkbox

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
    requiredCheck();
  };

  const handleChangeEvent = (inputValue: string) => {
    requiredCheck();
    setValue(inputValue);

    if (!(inputValue && error)) {
      setError(false);
    }
  }

  const Component = useFormField(type);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Component
        {...rest}
        name={name}
        id={name}
        type={type}
        onBlur={handleBlurEvent}
        onChange={e => handleChangeEvent(e.target.value)}
        className='input'
      />
      <span className={error ? 'error-block' : 'error-none'}>
        {errorText}
      </span>
    </div>
  );
}