import PropTypes from 'prop-types';
import React from 'react';
import { ViewStyle, LayoutChangeEvent } from 'react-native';
import { AvatarProps } from './Avatar';
import Bubble from './Bubble';
import { SystemMessageProps } from './SystemMessage';
import { DayProps } from './Day';
import { IMessage, User, LeftRightStyle } from './Models';
export interface MessageProps<TMessage extends IMessage> {
    key: any;
    showUserAvatar?: boolean;
    position: 'left' | 'right';
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    user: User;
    inverted?: boolean;
    containerStyle?: LeftRightStyle<ViewStyle>;
    renderBubble?(props: Bubble['props']): React.ReactNode;
    renderDay?(props: DayProps<TMessage>): React.ReactNode;
    renderSystemMessage?(props: SystemMessageProps<TMessage>): React.ReactNode;
    renderAvatar?(props: AvatarProps<TMessage>): React.ReactNode;
    shouldUpdateMessage?(props: MessageProps<IMessage>, nextProps: MessageProps<IMessage>): boolean;
    onMessageLayout?(event: LayoutChangeEvent): void;
}
export default class Message<TMessage extends IMessage = IMessage> extends React.Component<MessageProps<TMessage>> {
    static defaultProps: {
        renderAvatar: undefined;
        renderBubble: null;
        renderDay: null;
        renderSystemMessage: null;
        position: string;
        currentMessage: {};
        nextMessage: {};
        previousMessage: {};
        user: {};
        containerStyle: {};
        showUserAvatar: boolean;
        inverted: boolean;
        shouldUpdateMessage: undefined;
        onMessageLayout: undefined;
    };
    static propTypes: {
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        showUserAvatar: PropTypes.Requireable<boolean>;
        renderBubble: PropTypes.Requireable<(...args: any[]) => any>;
        renderDay: PropTypes.Requireable<(...args: any[]) => any>;
        renderSystemMessage: PropTypes.Requireable<(...args: any[]) => any>;
        position: PropTypes.Requireable<string>;
        currentMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        user: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        shouldUpdateMessage: PropTypes.Requireable<(...args: any[]) => any>;
        onMessageLayout: PropTypes.Requireable<(...args: any[]) => any>;
    };
    shouldComponentUpdate(nextProps: MessageProps<TMessage>): boolean;
    renderDay(): React.ReactNode;
    renderBubble(): React.ReactNode;
    renderSystemMessage(): React.ReactNode;
    renderAvatar(): JSX.Element | null;
    render(): JSX.Element | null;
}
