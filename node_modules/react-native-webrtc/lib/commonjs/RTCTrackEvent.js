"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RTCTrackEvent {
  constructor(type, eventInitDict) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "streams", []);

    _defineProperty(this, "transceiver", void 0);

    _defineProperty(this, "receiver", void 0);

    _defineProperty(this, "track", void 0);

    this.type = type.toString();
    this.streams = eventInitDict.streams;
    this.transceiver = eventInitDict.transceiver;
    this.receiver = eventInitDict.transceiver.receiver;
    this.track = eventInitDict.transceiver.receiver ? eventInitDict.transceiver.receiver.track : null;
  }

}

exports.default = RTCTrackEvent;
//# sourceMappingURL=RTCTrackEvent.js.map