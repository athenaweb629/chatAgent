import type MediaStream from './MediaStream';
export default class MediaStreamEvent {
    type: string;
    stream: MediaStream;
    constructor(type: any, eventInitDict: {
        stream: MediaStream;
    });
}
