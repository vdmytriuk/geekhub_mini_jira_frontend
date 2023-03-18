import {Input} from "../UI/Input/Input";
import {Password} from "../UI/Input/Password";
import {TextAria} from "../UI/Input/TextAria";

const useFormField = (type: string) => {
  switch (type) {
    case 'password':
      return Password;

    case 'email':
      return Input;

    case 'name':
      return Input;

    case 'textarea':
      return TextAria;

    default:
      return Input;
  }
};

export default useFormField;