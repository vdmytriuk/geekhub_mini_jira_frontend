import {FC, ReactNode} from "react";

import PublicHeader from "../../layouts/PublicHeader/PublicHeader";

interface IPublicView {
    children: ReactNode;
}

const PublicView:FC<IPublicView> = ({children}) => {
    return (
        <>
            <PublicHeader/>

            <main>
                {children}
            </main>
        </>
    );
};

export default PublicView;