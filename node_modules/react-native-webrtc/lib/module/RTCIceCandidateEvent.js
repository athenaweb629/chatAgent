function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class RTCIceCandidateEvent {
  constructor(type, eventInitDict) {
    var _eventInitDict$candid;

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "candidate", void 0);

    this.type = type.toString();
    this.candidate = (_eventInitDict$candid = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.candidate) !== null && _eventInitDict$candid !== void 0 ? _eventInitDict$candid : null;
  }

}
//# sourceMappingURL=RTCIceCandidateEvent.js.map