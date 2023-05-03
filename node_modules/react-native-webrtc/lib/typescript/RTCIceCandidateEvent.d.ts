import type RTCIceCandidate from './RTCIceCandidate';
export default class RTCIceCandidateEvent {
    type: string;
    candidate: RTCIceCandidate | null;
    constructor(type: any, eventInitDict: any);
}
