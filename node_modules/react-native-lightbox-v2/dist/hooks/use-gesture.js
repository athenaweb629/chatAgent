import { useRef } from "react";
import { Dimensions, Animated, } from "react-native";
// -------------------------  default vars  ------------------------
const now = () => +new Date();
const { width, height } = Dimensions.get("window");
const INIT_POSITION = { x: 0, y: 0 };
// -------------------------  hooks  -------------------------
export const useGesture = ({ doubleTapGapTimer = 500, doubleTapAnimationDuration = 100, doubleTapZoomEnabled = true, doubleTapCallback, doubleTapZoomToCenter, doubleTapMaxZoom = 2, doubleTapInitialScale = 1, doubleTapZoomStep = 0.5, UNSAFE_INNER_WIDTH__cropWidth = width, UNSAFE_INNER_WIDTH__cropHeight = height, longPressGapTimer = 2000, longPressCallback, 
// longPressToSaveEnable = false,
useNativeDriver, }) => {
    // last tap timer
    const lastTapTimer = useRef(0);
    // long press timer
    const longPressTimer = useRef();
    // if double taped
    const isDoubleTaped = useRef(false);
    // if long pressed
    const isLongPressed = useRef(false);
    // double tap coordinates
    const coordinates = useRef(INIT_POSITION);
    // double tap scale
    const doubleTapScale = useRef(doubleTapInitialScale);
    // animated
    const animatedScale = useRef(new Animated.Value(1));
    const animatedPositionX = useRef(new Animated.Value(INIT_POSITION.x));
    const animatedPositionY = useRef(new Animated.Value(INIT_POSITION.y));
    // animation style to export
    const animations = useRef();
    // init the status
    const init = () => {
        isDoubleTaped.current = false;
        isLongPressed.current = false;
    };
    const release = () => {
        if (longPressTimer.current)
            clearTimeout(longPressTimer.current);
    };
    const onDoubleTap = (e, gestureState) => {
        if (gestureState.numberActiveTouches > 1)
            return;
        const nowTapTimer = now();
        // double tap
        if ((nowTapTimer - lastTapTimer.current) < doubleTapGapTimer) {
            isDoubleTaped.current = true;
            lastTapTimer.current = 0;
            // double tap callback
            if (doubleTapCallback)
                doubleTapCallback(e, gestureState);
            // double tap zoom
            if (!doubleTapZoomEnabled)
                return;
            // cancel long press
            longPressTimer.current && clearTimeout(longPressTimer.current);
            // next scale
            doubleTapScale.current = doubleTapScale.current + doubleTapInitialScale * doubleTapZoomStep;
            if (doubleTapScale.current > doubleTapMaxZoom) {
                doubleTapScale.current = doubleTapInitialScale;
            }
            coordinates.current = {
                x: e.nativeEvent.changedTouches[0].pageX,
                y: e.nativeEvent.changedTouches[0].pageY,
            };
            if (doubleTapZoomToCenter) {
                coordinates.current = {
                    x: UNSAFE_INNER_WIDTH__cropWidth / 2,
                    y: UNSAFE_INNER_WIDTH__cropHeight / 2,
                };
            }
            Animated.parallel([
                Animated.timing(animatedScale.current, {
                    toValue: doubleTapScale.current,
                    duration: doubleTapAnimationDuration,
                    useNativeDriver,
                }),
                Animated.timing(animatedPositionX.current, {
                    toValue: ((UNSAFE_INNER_WIDTH__cropWidth / 2 - coordinates.current.x) *
                        (doubleTapScale.current - doubleTapInitialScale)) /
                        doubleTapScale.current,
                    duration: doubleTapAnimationDuration,
                    useNativeDriver,
                }),
                Animated.timing(animatedPositionY.current, {
                    toValue: ((UNSAFE_INNER_WIDTH__cropHeight / 2 - coordinates.current.y) *
                        (doubleTapScale.current - doubleTapInitialScale)) /
                        doubleTapScale.current,
                    duration: doubleTapAnimationDuration,
                    useNativeDriver,
                }),
            ]).start();
            animations.current = {
                transform: [
                    {
                        scale: animatedScale.current,
                    },
                    {
                        translateX: animatedPositionX.current,
                    },
                    {
                        translateY: animatedPositionY.current,
                    },
                ],
            };
        }
        else {
            lastTapTimer.current = nowTapTimer;
        }
    };
    const onLongPress = (e, gestureState) => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
        longPressTimer.current = setTimeout(() => {
            isLongPressed.current = true;
            if (longPressCallback) {
                longPressCallback(e, gestureState);
            }
        }, longPressGapTimer);
    };
    // reset
    const reset = () => {
        // double tap animations reset
        animatedScale.current.setValue(doubleTapInitialScale);
        animatedPositionX.current.setValue(INIT_POSITION.x);
        animatedPositionY.current.setValue(INIT_POSITION.y);
        animations.current = void 0;
    };
    // todo pinch to zoom
    return [
        {
            onDoubleTap,
            reset,
            init,
            release,
            onLongPress,
            isDoubleTaped: isDoubleTaped.current,
            isLongPressed: isLongPressed.current
        },
        animations.current,
    ];
};
