import {FC} from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import "./AppNotification.scss";

import Close from "../../assets/svg/close.svg";

const AppNotification: FC = () => {
    const title = useTypedSelector(state => state.app.appNotificationTitle);
    const text = useTypedSelector(state => state.app.appNotificationText);
    const isVisible = useTypedSelector(state => state.app.appNotificationVisible);

    return isVisible && (
        <div className="app-notification">
            <button className="app-notification__close">
                <Close/>
            </button>

            <h3 className="medium-title">
                {title}
            </h3>

            <p>
                {text}
            </p>
        </div>
    );
};

export default AppNotification;