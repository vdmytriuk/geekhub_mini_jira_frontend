import {FC, ReactNode} from "react";

interface IPublicView {
    children: ReactNode;
}

const PublicView:FC<IPublicView> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PublicView;