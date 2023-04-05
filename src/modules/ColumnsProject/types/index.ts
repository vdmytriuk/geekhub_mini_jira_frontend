import {ITaskProps} from "../../TaskInBoard/types";

export interface IColumnProps {
    id: string;
    label: string;
    tint: number;
    items: Array<ITaskProps>
}

