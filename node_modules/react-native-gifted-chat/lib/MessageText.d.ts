/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { LeftRightStyle, IMessage } from './Models';
export interface MessageTextProps<TMessage extends IMessage> {
    position?: 'left' | 'right';
    optionTitles?: string[];
    currentMessage?: TMessage;
    containerStyle?: LeftRightStyle<ViewStyle>;
    textStyle?: LeftRightStyle<TextStyle>;
    linkStyle?: LeftRightStyle<TextStyle>;
    textProps?: TextProps;
    customTextStyle?: StyleProp<TextStyle>;
    parsePatterns?(linkStyle: TextStyle): any;
}
export declare function MessageText<TMessage extends IMessage = IMessage>({ currentMessage, optionTitles, position, containerStyle, textStyle, linkStyle: linkStyleProp, customTextStyle, parsePatterns, textProps, }: MessageTextProps<TMessage>): JSX.Element;
export declare namespace MessageText {
    var propTypes: {
        position: PropTypes.Requireable<string>;
        optionTitles: PropTypes.Requireable<(string | null | undefined)[]>;
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        textStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        linkStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        parsePatterns: PropTypes.Requireable<(...args: any[]) => any>;
        textProps: PropTypes.Requireable<object>;
        customTextStyle: PropTypes.Requireable<number | boolean | object>;
    };
}
