import {FC} from "react";

import './PublicLayout.scss';

export const PublicLayout = ({children}: {children: JSX.Element
        | JSX.Element[]}) => {
    return (
        <div className={"container container--public"}>
            <div className={"content"}>
                {children}
            </div>
            <div>
                <div>
                    Testttttt
                </div>
            </div>
        </div>
    );
};