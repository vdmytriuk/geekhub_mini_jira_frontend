import {Input} from "../UI/Input/Input";
import {Password} from "../UI/Input/Password/Password";

const useFormField = (type: string) => {
  switch (type) {
    case 'password':
      return Password;

    default:
      return Input;
  }
};

export default useFormField;