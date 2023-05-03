function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeModules } from 'react-native';
import RTCRtpCodecCapability from './RTCRtpCodecCapability';
const {
  WebRTCModule
} = NativeModules;
/**
 * @brief represents codec capabilities for senders and receivers. Currently
 * this only supports codec names and does not have other
 * fields like clockRate and numChannels and such.
 */

export default class RTCRtpCapabilities {
  constructor(codecs) {
    _defineProperty(this, "_codecs", []);

    this._codecs = codecs;
    Object.freeze(this);
  }

  get codecs() {
    return this._codecs;
  }

}

function getCapabilities(endpoint) {
  switch (endpoint) {
    case 'sender':
      {
        const capabilities = WebRTCModule.senderGetCapabilities();

        if (!capabilities) {
          return null;
        }

        return new RTCRtpCapabilities(capabilities.codecs);
      }

    case 'receiver':
      {
        const capabilities = WebRTCModule.receiverGetCapabilities();

        if (!capabilities) {
          return null;
        }

        return new RTCRtpCapabilities(capabilities.codecs);
      }

    default:
      throw new TypeError('Invalid endpoint: ' + endpoint);
  }
}
/**
 * Hardcoded audio capabilities based on the WebRTC native documentation:
 * https://webrtc.github.io/webrtc-org/faq/. The mime type is specified in
 * https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2.
 */


export const DEFAULT_AUDIO_CAPABILITIES = new RTCRtpCapabilities([new RTCRtpCodecCapability({
  mimeType: 'audio/G722'
}), new RTCRtpCodecCapability({
  mimeType: 'audio/iLBC'
})]); // Initialize capabilities on module import

export const senderCapabilities = getCapabilities('sender');
export const receiverCapabilities = getCapabilities('receiver');
//# sourceMappingURL=RTCRtpCapabilities.js.map