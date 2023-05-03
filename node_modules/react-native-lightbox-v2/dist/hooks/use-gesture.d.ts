import { Animated } from "react-native";
interface IDoubleTapOptions {
    doubleTapZoomEnabled?: boolean;
    doubleTapGapTimer?: number;
    doubleTapCallback?: Function;
    doubleTapZoomToCenter?: boolean;
    doubleTapMaxZoom?: number;
    doubleTapZoomStep?: number;
    doubleTapInitialScale?: number;
    doubleTapAnimationDuration?: number;
    useNativeDriver?: boolean;
    UNSAFE_INNER_WIDTH__cropWidth?: number;
    UNSAFE_INNER_WIDTH__cropHeight?: number;
}
interface ILongPressProps {
    longPressGapTimer?: number;
    longPressCallback?: Function;
}
export interface AnimatedTransformStyle {
    transform: Partial<Record<"scale" | "translateX" | "translateY", Animated.Value>>[];
}
export interface IGestureProps extends IDoubleTapOptions, ILongPressProps {
}
export interface GestureReturnFunction {
    reset: Function;
    onDoubleTap: Function;
    init: Function;
    release: Function;
    onLongPress: Function;
    isDoubleTaped: boolean;
    isLongPressed: boolean;
}
export declare const useGesture: ({ doubleTapGapTimer, doubleTapAnimationDuration, doubleTapZoomEnabled, doubleTapCallback, doubleTapZoomToCenter, doubleTapMaxZoom, doubleTapInitialScale, doubleTapZoomStep, UNSAFE_INNER_WIDTH__cropWidth, UNSAFE_INNER_WIDTH__cropHeight, longPressGapTimer, longPressCallback, useNativeDriver, }: IGestureProps) => [GestureReturnFunction, AnimatedTransformStyle | undefined];
export {};
