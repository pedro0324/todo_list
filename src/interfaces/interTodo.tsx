export interface TodoInterface{
    id: number;
    title: string;
    body: string;
    status: Status;
}

export enum Status{
    realizada     ="S",
    noRealizada   ="N"
}