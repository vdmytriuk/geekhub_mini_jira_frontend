import {FC, useEffect} from "react";
import {useTypedDispatch} from "./hooks/useTypedDispatch";

import {setUserProfile} from "./store/user/operation";

import AppRouter from "./core/AppRouter/AppRouter";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {appActions} from "./store/app";
import AppNotification from "./components/AppNotification/AppNotification";

const App: FC = () => {
  const dispatch = useTypedDispatch();
  const isAppLoaded = useTypedSelector(state => state.app.isInitialAppLoaded);

  useEffect(() => {
    dispatch(setUserProfile())
        .then(() => dispatch(appActions.setIsAppLoaded()));
  }, []);

  return (
      isAppLoaded &&

      <>
        <AppNotification/>

        <AppRouter/>
      </>
  )
};

export default App;