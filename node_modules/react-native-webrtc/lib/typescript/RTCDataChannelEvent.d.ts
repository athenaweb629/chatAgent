import type RTCDataChannel from './RTCDataChannel';
export default class RTCDataChannelEvent {
    type: string;
    channel: RTCDataChannel;
    constructor(type: any, eventInitDict: {
        channel: RTCDataChannel;
    });
}
