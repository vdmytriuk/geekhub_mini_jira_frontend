import React, {FC} from "react";
import {Link} from "react-router-dom";

import "./RoundedButton.scss";

interface RoundedButtonProps {
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    anchor?: string;
    active?: boolean;
    onClick?: any;
}

const RoundedButton: FC<RoundedButtonProps> = ({icon, anchor, text, active, onClick}) => {
    const Icon = icon;

    return (
        <Link
            className={`rounded-button ${active ? 'rounded-button_active' : ''}`}
            to={anchor}
            onClick={onClick}
        >
            <Icon/>

            <span className="text">
                {text}
            </span>
        </Link>
    );
};

export default RoundedButton;