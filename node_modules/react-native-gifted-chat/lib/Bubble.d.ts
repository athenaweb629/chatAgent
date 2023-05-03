import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { QuickRepliesProps } from './QuickReplies';
import { MessageTextProps } from './MessageText';
import { MessageImageProps } from './MessageImage';
import { TimeProps } from './Time';
import { User, IMessage, LeftRightStyle, Reply, Omit, MessageVideoProps, MessageAudioProps } from './Models';
export declare type RenderMessageImageProps<TMessage extends IMessage> = Omit<BubbleProps<TMessage>, 'containerStyle' | 'wrapperStyle'> & MessageImageProps<TMessage>;
export declare type RenderMessageVideoProps<TMessage extends IMessage> = Omit<BubbleProps<TMessage>, 'containerStyle' | 'wrapperStyle'> & MessageVideoProps<TMessage>;
export declare type RenderMessageAudioProps<TMessage extends IMessage> = Omit<BubbleProps<TMessage>, 'containerStyle' | 'wrapperStyle'> & MessageAudioProps<TMessage>;
export declare type RenderMessageTextProps<TMessage extends IMessage> = Omit<BubbleProps<TMessage>, 'containerStyle' | 'wrapperStyle'> & MessageTextProps<TMessage>;
export interface BubbleProps<TMessage extends IMessage> {
    user?: User;
    touchableProps?: object;
    renderUsernameOnMessage?: boolean;
    isCustomViewBottom?: boolean;
    inverted?: boolean;
    position: 'left' | 'right';
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    optionTitles?: string[];
    containerStyle?: LeftRightStyle<ViewStyle>;
    wrapperStyle?: LeftRightStyle<ViewStyle>;
    textStyle?: LeftRightStyle<TextStyle>;
    bottomContainerStyle?: LeftRightStyle<ViewStyle>;
    tickStyle?: StyleProp<TextStyle>;
    containerToNextStyle?: LeftRightStyle<ViewStyle>;
    containerToPreviousStyle?: LeftRightStyle<ViewStyle>;
    usernameStyle?: TextStyle;
    quickReplyStyle?: StyleProp<ViewStyle>;
    quickReplyTextStyle?: StyleProp<TextStyle>;
    onPress?(context?: any, message?: any): void;
    onLongPress?(context?: any, message?: any): void;
    onQuickReply?(replies: Reply[]): void;
    renderMessageImage?(props: RenderMessageImageProps<TMessage>): React.ReactNode;
    renderMessageVideo?(props: RenderMessageVideoProps<TMessage>): React.ReactNode;
    renderMessageAudio?(props: RenderMessageAudioProps<TMessage>): React.ReactNode;
    renderMessageText?(props: RenderMessageTextProps<TMessage>): React.ReactNode;
    renderCustomView?(bubbleProps: BubbleProps<TMessage>): React.ReactNode;
    renderTime?(timeProps: TimeProps<TMessage>): React.ReactNode;
    renderTicks?(currentMessage: TMessage): React.ReactNode;
    renderUsername?(user?: TMessage['user']): React.ReactNode;
    renderQuickReplySend?(): React.ReactNode;
    renderQuickReplies?(quickReplies: QuickRepliesProps<TMessage>): React.ReactNode;
}
export default class Bubble<TMessage extends IMessage = IMessage> extends React.Component<BubbleProps<TMessage>> {
    static contextType: React.Context<import("./GiftedChatContext").IGiftedChatContext>;
    static defaultProps: {
        touchableProps: {};
        onPress: null;
        onLongPress: null;
        renderMessageImage: null;
        renderMessageVideo: null;
        renderMessageAudio: null;
        renderMessageText: null;
        renderCustomView: null;
        renderUsername: null;
        renderTicks: null;
        renderTime: null;
        renderQuickReplies: null;
        onQuickReply: null;
        position: string;
        optionTitles: string[];
        currentMessage: {
            text: null;
            createdAt: null;
            image: null;
        };
        nextMessage: {};
        previousMessage: {};
        containerStyle: {};
        wrapperStyle: {};
        bottomContainerStyle: {};
        tickStyle: {};
        usernameStyle: {};
        containerToNextStyle: {};
        containerToPreviousStyle: {};
    };
    static propTypes: {
        user: PropTypes.Validator<object>;
        touchableProps: PropTypes.Requireable<object>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessageImage: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessageVideo: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessageAudio: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessageText: PropTypes.Requireable<(...args: any[]) => any>;
        renderCustomView: PropTypes.Requireable<(...args: any[]) => any>;
        isCustomViewBottom: PropTypes.Requireable<boolean>;
        renderUsernameOnMessage: PropTypes.Requireable<boolean>;
        renderUsername: PropTypes.Requireable<(...args: any[]) => any>;
        renderTime: PropTypes.Requireable<(...args: any[]) => any>;
        renderTicks: PropTypes.Requireable<(...args: any[]) => any>;
        renderQuickReplies: PropTypes.Requireable<(...args: any[]) => any>;
        onQuickReply: PropTypes.Requireable<(...args: any[]) => any>;
        position: PropTypes.Requireable<string>;
        optionTitles: PropTypes.Requireable<(string | null | undefined)[]>;
        currentMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        wrapperStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        bottomContainerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        tickStyle: PropTypes.Requireable<number | boolean | object>;
        usernameStyle: PropTypes.Requireable<number | boolean | object>;
        containerToNextStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        containerToPreviousStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
    };
    onPress: () => void;
    onLongPress: () => void;
    styledBubbleToNext(): (StyleProp<ViewStyle> | {
        borderBottomLeftRadius: number;
    } | {
        borderBottomRightRadius: number;
    })[] | null;
    styledBubbleToPrevious(): (StyleProp<ViewStyle> | {
        borderTopLeftRadius: number;
    } | {
        borderTopRightRadius: number;
    })[] | null;
    renderQuickReplies(): React.ReactNode;
    renderMessageText(): React.ReactNode;
    renderMessageImage(): React.ReactNode;
    renderMessageVideo(): React.ReactNode;
    renderMessageAudio(): React.ReactNode;
    renderTicks(): React.ReactNode;
    renderTime(): React.ReactNode;
    renderUsername(): React.ReactNode;
    renderCustomView(): React.ReactNode;
    renderBubbleContent(): JSX.Element;
    render(): JSX.Element;
}
