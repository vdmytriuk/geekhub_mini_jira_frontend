import {FC, ReactNode} from "react";

import PrivateHeader from "../layouts/PrivateHeader/PrivateHeader";

interface IPrivateView {
    children: ReactNode;
}

const PrivateView:FC<IPrivateView> = ({children}) => {
    return (
        <>
            <PrivateHeader/>

            <main>
                {children}
            </main>
        </>
    );
};

export default PrivateView;