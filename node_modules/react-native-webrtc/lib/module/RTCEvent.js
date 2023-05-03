function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class RTCEvent {
  constructor(type) {
    _defineProperty(this, "type", void 0);

    this.type = type.toString();
  }

}
//# sourceMappingURL=RTCEvent.js.map