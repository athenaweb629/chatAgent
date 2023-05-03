/// <reference types="react-native" />
export declare type MessageEventData = string | ArrayBuffer | Blob;
export default class MessageEvent {
    type: string;
    data: MessageEventData;
    constructor(type: string, eventInitDict: {
        data: MessageEventData;
    });
}
