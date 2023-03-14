import {FC, ReactNode} from "react";

interface IPrivateView {
    children: ReactNode;
}

const PrivateView:FC<IPrivateView> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateView;