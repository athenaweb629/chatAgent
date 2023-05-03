function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class MediaStreamTrackEvent {
  constructor(type, eventInitDict) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "track", void 0);

    this.type = type.toString();
    this.track = eventInitDict.track;
  }

}
//# sourceMappingURL=MediaStreamTrackEvent.js.map