import './PublicLayout.scss';

import pictureBackground from '../../assets/images/Picture-background.png'

export const PublicLayout = ({children}: {
    children: JSX.Element
        | JSX.Element[]
}) => {
    return (
        <div className="container container--public">
            <div className="column column--first">
                {children}
            </div>
            <div className="column column--second">
              <img src={pictureBackground} alt="img"/>
            </div>
        </div>
    );
};