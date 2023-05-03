import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { IMessage } from './Models';
export interface SendProps<TMessage extends IMessage> {
    text?: string;
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: React.ReactNode;
    alwaysShowSend?: boolean;
    disabled?: boolean;
    sendButtonProps?: Partial<TouchableOpacityProps>;
    onSend?(messages: Partial<TMessage> | Partial<TMessage>[], shouldResetInputToolbar: boolean): void;
}
export declare const Send: {
    <TMessage extends IMessage = IMessage>({ text, containerStyle, children, textStyle, label, alwaysShowSend, disabled, sendButtonProps, onSend, }: SendProps<TMessage>): JSX.Element | null;
    propTypes: {
        text: PropTypes.Requireable<string>;
        onSend: PropTypes.Requireable<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
        textStyle: PropTypes.Requireable<number | boolean | object>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        alwaysShowSend: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        sendButtonProps: PropTypes.Requireable<object>;
    };
};
