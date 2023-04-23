import Clock from "../../assets/svg/clock.svg"
import "./TimeInDeskTusks.scss"

export const TimeInDeskTasks = ({time}: {time: string}) => {
    const date = new Date(time);

    const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    const formattedDate = `${day} ${month}`;

    const currentDate = new Date();
    const isDateValid = date.getTime() < currentDate.getTime();

    const style = {
        backgroundColor: isDateValid ? '#FFEDED' : '#F1FFE3',
        color: isDateValid ? '#D94841' : '#83BF6E'
    };

    return (
        <div style={style} className={"clock-block"}>
            <Clock style={{fill: isDateValid ? '#D94841' : '#83BF6E'}}/>
            {formattedDate}
        </div>
    )
}