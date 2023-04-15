import {FC, useEffect} from "react";
import {useTypedDispatch} from "./hooks/useTypedDispatch";

import {userActions} from "./store/user";
import {setUserProfile} from "./store/user/operation";

import AppRouter from "./core/AppRouter/AppRouter";

const App: FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(userActions.initUser());
    dispatch(setUserProfile());
  }, []);

  return (
      <AppRouter/>
  )
};

export default App;