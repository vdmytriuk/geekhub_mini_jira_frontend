import {DefaultField} from "../fields/DefaultField/DefaultField";
import {PasswordField} from "../fields/PasswordField/PasswordField";

const useFormField = (type: string) => {
  switch (type) {
    case 'password':
      return PasswordField;

    default:
      return DefaultField;
  }
};

export default useFormField;