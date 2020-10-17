export interface IChatCard {
    id: number;
    name: string;
    number: string;
    avatar: string;
    messages: IMessage[];
}

export interface IMessage {
    messageTag: string;
    messageText: string;
    messageDate: Date;
}