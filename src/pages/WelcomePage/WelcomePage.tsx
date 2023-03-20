import React, {FC, useState} from "react";
import {FormField} from "../../UI/FormField/FormField";

const WelcomePage: FC = () => {
    const [value, setValue] = useState('')

  return (
    <div>
      <FormField
          name={"name"}
          type={"password"}
          value={value}
          setValue={setValue}
          label={"Name"}
          required
          errorPrompt={"Invalid password"}
          pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}
      />
    </div>
  );
};

export default WelcomePage;