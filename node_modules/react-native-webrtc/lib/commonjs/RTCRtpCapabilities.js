"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.senderCapabilities = exports.receiverCapabilities = exports.default = exports.DEFAULT_AUDIO_CAPABILITIES = void 0;

var _reactNative = require("react-native");

var _RTCRtpCodecCapability = _interopRequireDefault(require("./RTCRtpCodecCapability"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  WebRTCModule
} = _reactNative.NativeModules;
/**
 * @brief represents codec capabilities for senders and receivers. Currently
 * this only supports codec names and does not have other
 * fields like clockRate and numChannels and such.
 */

class RTCRtpCapabilities {
  constructor(codecs) {
    _defineProperty(this, "_codecs", []);

    this._codecs = codecs;
    Object.freeze(this);
  }

  get codecs() {
    return this._codecs;
  }

}

exports.default = RTCRtpCapabilities;

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


const DEFAULT_AUDIO_CAPABILITIES = new RTCRtpCapabilities([new _RTCRtpCodecCapability.default({
  mimeType: 'audio/G722'
}), new _RTCRtpCodecCapability.default({
  mimeType: 'audio/iLBC'
})]); // Initialize capabilities on module import

exports.DEFAULT_AUDIO_CAPABILITIES = DEFAULT_AUDIO_CAPABILITIES;
const senderCapabilities = getCapabilities('sender');
exports.senderCapabilities = senderCapabilities;
const receiverCapabilities = getCapabilities('receiver');
exports.receiverCapabilities = receiverCapabilities;
//# sourceMappingURL=RTCRtpCapabilities.js.map