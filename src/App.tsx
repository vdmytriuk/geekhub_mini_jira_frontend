import {FC, useEffect} from "react";
import {useTypedDispatch} from "./hooks/useTypedDispatch";

import {setUserProfile} from "./store/user/operation";

import AppRouter from "./core/AppRouter/AppRouter";
import {userActions} from "./store/user";
import {useTypedSelector} from "./hooks/useTypedSelector";

const App: FC = () => {
  const dispatch = useTypedDispatch();
  const isAppLoaded = useTypedSelector(state => state.user.isAppLoaded);

  useEffect(() => {
    dispatch(setUserProfile())
        .then(() => dispatch(userActions.setIsAppLoaded()));
  }, []);

  return (
      isAppLoaded && <AppRouter/>
  )
};

export default App;