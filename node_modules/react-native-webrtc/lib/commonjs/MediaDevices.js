"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventTargetShim = require("event-target-shim");

var _reactNative = require("react-native");

var _getDisplayMedia = _interopRequireDefault(require("./getDisplayMedia"));

var _getUserMedia = _interopRequireDefault(require("./getUserMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  WebRTCModule
} = _reactNative.NativeModules;
const MEDIA_DEVICES_EVENTS = ['devicechange'];

class MediaDevices extends (0, _eventTargetShim.defineCustomEventTarget)(...MEDIA_DEVICES_EVENTS) {
  /**
   * W3C "Media Capture and Streams" compatible {@code enumerateDevices}
   * implementation.
   */
  enumerateDevices() {
    return new Promise(resolve => WebRTCModule.enumerateDevices(resolve));
  }
  /**
   * W3C "Screen Capture" compatible {@code getDisplayMedia} implementation.
   * See: https://w3c.github.io/mediacapture-screen-share/
   *
   * @returns {Promise}
   */


  getDisplayMedia() {
    return (0, _getDisplayMedia.default)();
  }
  /**
   * W3C "Media Capture and Streams" compatible {@code getUserMedia}
   * implementation.
   * See: https://www.w3.org/TR/mediacapture-streams/#dom-mediadevices-enumeratedevices
   *
   * @param {*} constraints
   * @returns {Promise}
   */


  getUserMedia(constraints) {
    return (0, _getUserMedia.default)(constraints);
  }

}

var _default = new MediaDevices();

exports.default = _default;
//# sourceMappingURL=MediaDevices.js.map