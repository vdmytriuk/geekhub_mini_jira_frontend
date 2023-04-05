import {FC} from "react";

import "./SecondaryButton.scss";

interface SecondaryButtonProps {
    children: any;
    onClick: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({children, ...props}) => {
    return (
        <button
            {...props}
            className="secondary-button"
        >
            {children}
        </button>
    );
};

export default SecondaryButton;