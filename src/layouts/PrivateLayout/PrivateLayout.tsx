import {FC, ReactNode} from "react";

import "./PrivateLayout.scss";

interface PrivateLayoutProps {
    toolbar: ReactNode;
    header: ReactNode;
    children: ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({toolbar, header, children}) => {
    return (
        <section className="private-layout">
            <aside className="private-layout__toolbar">
                {toolbar}
            </aside>

            <div className="private-layout__inner">
                <div className="private-layout__header">
                    {header}
                </div>

                <div className="private-layout__main">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default PrivateLayout;