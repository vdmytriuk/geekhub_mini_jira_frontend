import {FC, ReactNode} from "react";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

import {userActions} from "../../store/user";

import {Button} from "../../UI/Button/Button";
import PrivateHeader from "../../layouts/PrivateHeader/PrivateHeader";

import "./PrivateView.scss";

interface IPrivateView {
    children: ReactNode;
}

const PrivateView:FC<IPrivateView> = ({children}) => {
    const dispatch = useTypedDispatch();

    return (
        <>
            <PrivateHeader/>

            <main className="private-view">

                {children}

                <div
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20
                    }}
                >
                    <Button onClick={() => dispatch(userActions.logout())}>
                        Logout
                    </Button>
                </div>
            </main>
        </>
    );
};

export default PrivateView;