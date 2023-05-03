export default class RTCIceCandidate {
    candidate: string;
    sdpMLineIndex: number;
    sdpMid: string;
    constructor({ candidate, sdpMLineIndex, sdpMid }: {
        candidate?: string | undefined;
        sdpMLineIndex?: null | undefined;
        sdpMid?: null | undefined;
    });
    toJSON(): {
        candidate: string;
        sdpMLineIndex: number;
        sdpMid: string;
    };
}
