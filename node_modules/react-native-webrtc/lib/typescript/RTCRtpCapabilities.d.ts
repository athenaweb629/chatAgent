import RTCRtpCodecCapability from './RTCRtpCodecCapability';
/**
 * @brief represents codec capabilities for senders and receivers. Currently
 * this only supports codec names and does not have other
 * fields like clockRate and numChannels and such.
 */
export default class RTCRtpCapabilities {
    _codecs: RTCRtpCodecCapability[];
    constructor(codecs: RTCRtpCodecCapability[]);
    get codecs(): RTCRtpCodecCapability[];
}
/**
 * Hardcoded audio capabilities based on the WebRTC native documentation:
 * https://webrtc.github.io/webrtc-org/faq/. The mime type is specified in
 * https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2.
 */
export declare const DEFAULT_AUDIO_CAPABILITIES: RTCRtpCapabilities;
export declare const senderCapabilities: RTCRtpCapabilities | null;
export declare const receiverCapabilities: RTCRtpCapabilities | null;
