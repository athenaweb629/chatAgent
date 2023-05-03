import type MediaStreamTrack from './MediaStreamTrack';
export default class MediaStreamTrackEvent {
    type: string;
    track: MediaStreamTrack;
    constructor(type: any, eventInitDict: {
        track: MediaStreamTrack;
    });
}
