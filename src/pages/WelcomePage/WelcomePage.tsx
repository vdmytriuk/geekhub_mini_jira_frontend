import React, {FC, useState} from "react";

import {Button} from "../../UI/Button/Button";
import {FormField} from "../../UI/Input/FormField";

const WelcomePage: FC = () => {
  const [value, setValue] = useState<string>('');
  const insertClickHandler = () => {
    console.log('Clicked on  button');
  };

  const saveClickHandler = () => {
    console.log('Clicked on button');
  };

  return (
    <div>
      <FormField
        name='textarea'
        type="textarea"
        value={value}
        setValue={setValue}
        required
      />
      <FormField
        name='password'
        type='password'
        label='password'
        value={value}
        setValue={setValue}
        required
      />

      {/*<Button*/}
      {/*  id={"btnInsert"}*/}
      {/*  type='submit'*/}
      {/*  value={"Insert"}*/}
      {/*  disabled={true}*/}
      {/*  onClick={insertClickHandler}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  id={"btnSave"}*/}
      {/*  type='submit'*/}
      {/*  value={"Save"}*/}
      {/*  disabled={false}*/}
      {/*  onClick={saveClickHandler}*/}
      {/*/>*/}
    </div>
  );
};

export default WelcomePage;