/// <reference types="react" />
import PropTypes from 'prop-types';
import { StyleProp, ViewStyle, TextStyle, TextProps } from 'react-native';
import { IMessage } from './Models';
export interface DayProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textProps?: TextProps;
    dateFormat?: string;
    inverted?: boolean;
}
export declare function Day<TMessage extends IMessage = IMessage>({ dateFormat, currentMessage, previousMessage, containerStyle, wrapperStyle, textStyle, }: DayProps<TMessage>): JSX.Element | null;
export declare namespace Day {
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
        wrapperStyle: PropTypes.Requireable<number | boolean | object>;
        textStyle: PropTypes.Requireable<number | boolean | object>;
        dateFormat: PropTypes.Requireable<string>;
    };
}
