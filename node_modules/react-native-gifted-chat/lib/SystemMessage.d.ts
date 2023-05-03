/// <reference types="react" />
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import { IMessage } from './Models';
export interface SystemMessageProps<TMessage extends IMessage> {
    currentMessage?: TMessage;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}
export declare function SystemMessage<TMessage extends IMessage = IMessage>({ currentMessage, containerStyle, wrapperStyle, textStyle, }: SystemMessageProps<TMessage>): JSX.Element | null;
export declare namespace SystemMessage {
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
        wrapperStyle: PropTypes.Requireable<number | boolean | object>;
        textStyle: PropTypes.Requireable<number | boolean | object>;
    };
}
