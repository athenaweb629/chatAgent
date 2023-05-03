import { defineCustomEventTarget } from 'event-target-shim';
declare const MediaDevices_base: defineCustomEventTarget.CustomEventTargetConstructor<Record<string, import("event-target-shim").Event<string>>, "standard">;
declare class MediaDevices extends MediaDevices_base {
    /**
     * W3C "Media Capture and Streams" compatible {@code enumerateDevices}
     * implementation.
     */
    enumerateDevices(): Promise<unknown>;
    /**
     * W3C "Screen Capture" compatible {@code getDisplayMedia} implementation.
     * See: https://w3c.github.io/mediacapture-screen-share/
     *
     * @returns {Promise}
     */
    getDisplayMedia(): Promise<import("./MediaStream").default>;
    /**
     * W3C "Media Capture and Streams" compatible {@code getUserMedia}
     * implementation.
     * See: https://www.w3.org/TR/mediacapture-streams/#dom-mediadevices-enumeratedevices
     *
     * @param {*} constraints
     * @returns {Promise}
     */
    getUserMedia(constraints: any): Promise<import("./MediaStream").default>;
}
declare const _default: MediaDevices;
export default _default;
