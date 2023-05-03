import {FC, ReactNode} from "react";

import PrivateHeader from "../../layouts/PrivateHeader/PrivateHeader";

import "./PrivateView.scss";

interface IPrivateView {
    children: ReactNode;
}

const PrivateView:FC<IPrivateView> = ({children}) => {

    return (
        <>
            <PrivateHeader/>

            <main className="private-view">

                {children}
            </main>
        </>
    );
};

export default PrivateView;