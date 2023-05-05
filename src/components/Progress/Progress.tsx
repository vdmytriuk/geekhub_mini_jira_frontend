import {useTypedSelector} from "../../hooks/useTypedSelector";

import "./Progress.scss"

export const Progress = () => {
    const progress = useTypedSelector(state => state.progress.width);


    return (
        <div className="progress">
            <div className="progress-done" style={{
                opacity: 1,
                width: `${progress}%`
            }}>
                {progress ?
                    <div>
                        {progress}%
                    </div> : null}
            </div>
        </div>
    )
}