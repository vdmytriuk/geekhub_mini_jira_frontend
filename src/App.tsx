import {FC, useState} from "react";

import {Input} from "./UI/Input/Input";
import {Button} from "./UI/Button/Button";

interface AppProps {
    str?: string
}

export const App: FC<AppProps> = ({str}) => {
  const [count, setCount] = useState<number>(0);

  return (
      <div>
          init Page {str} {count}

          <button onClick={() => setCount(prevState => prevState + 1)}>
            +
          </button>
        <h1 className="title">Title</h1>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sapiente!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sapiente!</p>

        <Input
          type="text"
          name="email"
          required
          placeholder="Enter email"
        />
        <Input
          type="password"
          name="password"
          required
          placeholder="Enter password"
        />

        <Button>Text</Button>
      </div>
  )
}