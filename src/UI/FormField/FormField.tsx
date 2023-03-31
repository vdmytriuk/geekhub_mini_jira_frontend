import React, {FC, InputHTMLAttributes, useState} from "react";

import useFormField from "./common/useFormField";

import Alert from '../../assets/svg/alert.svg';
import Verify from '../../assets/svg/verify.svg';

import './FormField.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: string;
  setValue?: any;
  required?: boolean;
  pattern?: any;
  errorPrompt?: string;
  register?: any;
  errors?: any;
  success?: any;
}

export const FormField: FC<IInputProps> = ({type, name, register, errors, ...rest}) => {
  const Component = useFormField(type);

  return (
    <>
      <div className={`field`}>
        {type !== 'checkbox' &&
          <label
            htmlFor={name}
            className="field__label"
          >
            {rest.label}
          </label>
        }

        <Component
          {...rest}
          id={name}
          name={name}
          type={type}
          register={register}
          errors={errors}
          className={type === 'checkbox' ? 'field__checkbox' : 'field__input'}
        />

        {errors[name] ?
          <span className={`field__prompt ${errors ? "field__prompt_active" : ""}`}>
            <Alert/>
            {rest.errorPrompt}
         </span> :
          null
        }

        {rest.success
          ?
          <span className={`success ${rest.success ? "success_active" : ""}`}>
            <Verify/>
          </span> :
          null
        }

      </div>
    </>
    //     <div className={`field ${error ? "field_incorrect" : ""}`}>
//       {type !== 'checkbox' &&
//         <label
//           htmlFor={name}
//           className="field__label"
//         >
//           {label}
//         </label>
//       }
//
//       <Component
//         {...rest}
//         id={name}
//         value={value}
//         name={name}
//         type={type}
//         onChange={e => onChange(e.target.value, e.target.name)}
//         className={type === 'checkbox' ? 'field__checkbox' : 'field__input'}
//       />
//
//       {type === 'checkbox' &&
//         <label
//           htmlFor={name}
//           className="checkbox__label"
//         >
//           {label}
//         </label>
//       }
//
//       <span className={`field__prompt ${error ? "field__prompt_active" : ""}`}>
//           <Alert/>{errorText}
//       </span>
//     </div>
  );
};

// export const FormField: FC<IInputProps> =
//     ({
//      value,
//      setValue,
//      label,
//      name,
//      type,
//      pattern,
//      required,
//      errorPrompt,
//      ...rest
//    }) => {
//   const [errorText, setErrorText] = useState('');
//   const [error, setError] = useState(false);
//
//   const Component = useFormField(type);
//
//   const onChange = (inputValue: string, name?: string) => {
//     setValue(inputValue, name);
//
//     //TODO Yehor: create validation when required props defined;
//
//     if (!new RegExp(pattern).test(inputValue) && required) {
//       setError(true);
//       setErrorText(errorPrompt);
//     } else {
//       setError(false);
//       setErrorText('');
//     }
//   }
//
//   return (
//     <div className={`field ${error ? "field_incorrect" : ""}`}>
//       {type !== 'checkbox' &&
//         <label
//           htmlFor={name}
//           className="field__label"
//         >
//           {label}
//         </label>
//       }
//
//       <Component
//         {...rest}
//         id={name}
//         value={value}
//         name={name}
//         type={type}
//         onChange={e => onChange(e.target.value, e.target.name)}
//         className={type === 'checkbox' ? 'field__checkbox' : 'field__input'}
//       />
//
//       {type === 'checkbox' &&
//         <label
//           htmlFor={name}
//           className="checkbox__label"
//         >
//           {label}
//         </label>
//       }
//
//       <span className={`field__prompt ${error ? "field__prompt_active" : ""}`}>
//           <Alert/>{errorText}
//       </span>
//     </div>
//   );
// }