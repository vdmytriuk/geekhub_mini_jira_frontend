import {FC, ReactNode} from "react";

import AppToolbar from "../../layouts/AppToolbar/AppToolbar";
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
                <AppToolbar/>

                <div className="private-view__inner">
                    {children}
                </div>
            </main>
        </>
    );
};

export default PrivateView;