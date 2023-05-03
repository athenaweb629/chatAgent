import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import GiftedAvatar from './GiftedAvatar';
import { StylePropType, isSameUser, isSameDay } from './utils';
const styles = {
    left: StyleSheet.create({
        container: {
            marginRight: 8,
        },
        onTop: {
            alignSelf: 'flex-start',
        },
        onBottom: {},
        image: {
            height: 36,
            width: 36,
            borderRadius: 18,
        },
    }),
    right: StyleSheet.create({
        container: {
            marginLeft: 8,
        },
        onTop: {
            alignSelf: 'flex-start',
        },
        onBottom: {},
        image: {
            height: 36,
            width: 36,
            borderRadius: 18,
        },
    }),
};
export function Avatar(props) {
    const { renderAvatarOnTop, showAvatarForEveryMessage, containerStyle, position, currentMessage, renderAvatar, previousMessage, nextMessage, imageStyle, } = props;
    const messageToCompare = renderAvatarOnTop ? previousMessage : nextMessage;
    const computedStyle = renderAvatarOnTop ? 'onTop' : 'onBottom';
    if (renderAvatar === null) {
        return null;
    }
    if (!showAvatarForEveryMessage &&
        currentMessage &&
        messageToCompare &&
        isSameUser(currentMessage, messageToCompare) &&
        isSameDay(currentMessage, messageToCompare)) {
        return (<View style={[
                styles[position].container,
                containerStyle && containerStyle[position],
            ]}>
        <GiftedAvatar avatarStyle={[
                styles[position].image,
                imageStyle && imageStyle[position],
            ]}/>
      </View>);
    }
    const renderAvatarComponent = () => {
        if (props.renderAvatar) {
            const { renderAvatar, ...avatarProps } = props;
            return props.renderAvatar(avatarProps);
        }
        if (props.currentMessage) {
            return (<GiftedAvatar avatarStyle={[
                    styles[props.position].image,
                    props.imageStyle && props.imageStyle[props.position],
                ]} user={props.currentMessage.user} onPress={() => { var _a; return (_a = props.onPressAvatar) === null || _a === void 0 ? void 0 : _a.call(props, props.currentMessage.user); }} onLongPress={() => { var _a; return (_a = props.onLongPressAvatar) === null || _a === void 0 ? void 0 : _a.call(props, props.currentMessage.user); }}/>);
        }
        return null;
    };
    return (<View style={[
            styles[position].container,
            styles[position][computedStyle],
            containerStyle && containerStyle[position],
        ]}>
      {renderAvatarComponent()}
    </View>);
}
Avatar.defaultProps = {
    renderAvatarOnTop: false,
    showAvatarForEveryMessage: false,
    position: 'left',
    currentMessage: {
        user: null,
    },
    previousMessage: {},
    nextMessage: {},
    containerStyle: {},
    imageStyle: {},
    onPressAvatar: () => { },
    onLongPressAvatar: () => { },
};
Avatar.propTypes = {
    renderAvatarOnTop: PropTypes.bool,
    showAvatarForEveryMessage: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
    currentMessage: PropTypes.object,
    previousMessage: PropTypes.object,
    nextMessage: PropTypes.object,
    onPressAvatar: PropTypes.func,
    onLongPressAvatar: PropTypes.func,
    renderAvatar: PropTypes.func,
    containerStyle: PropTypes.shape({
        left: StylePropType,
        right: StylePropType,
    }),
    imageStyle: PropTypes.shape({
        left: StylePropType,
        right: StylePropType,
    }),
};
//# sourceMappingURL=Avatar.js.map