interface IOption {
    id: number;
    value: string;
    label: string;
}

export interface ISelectProps {
    options: IOption[];
    defaultValue: string;
    register: any;
    label: string;
    name: string;
}