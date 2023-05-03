function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class RTCDataChannelEvent {
  constructor(type, eventInitDict) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "channel", void 0);

    this.type = type.toString();
    this.channel = eventInitDict.channel;
  }

}
//# sourceMappingURL=RTCDataChannelEvent.js.map