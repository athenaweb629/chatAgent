import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { useCallbackOne } from 'use-memo-one';
import Color from './Color';
import { StylePropType } from './utils';
import { warning } from './logging';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 300,
    },
    quickReply: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        maxWidth: 200,
        paddingVertical: 7,
        paddingHorizontal: 12,
        minHeight: 50,
        borderRadius: 13,
        margin: 3,
    },
    quickReplyText: {
        overflow: 'visible',
    },
    sendLink: {
        borderWidth: 0,
    },
    sendLinkText: {
        color: Color.defaultBlue,
        fontWeight: '600',
        fontSize: 17,
    },
});
const sameReply = (currentReply) => (reply) => currentReply.value === reply.value;
const diffReply = (currentReply) => (reply) => currentReply.value !== reply.value;
export function QuickReplies({ currentMessage, nextMessage, color = Color.peterRiver, quickReplyStyle, quickReplyTextStyle, onQuickReply, sendText = 'Send', renderQuickReplySend, }) {
    const { type } = currentMessage.quickReplies;
    const [replies, setReplies] = useState([]);
    const shouldComponentDisplay = useMemo(() => {
        const hasReplies = !!currentMessage && !!currentMessage.quickReplies;
        const hasNext = !!nextMessage && !!nextMessage._id;
        const keepIt = currentMessage.quickReplies.keepIt;
        if (hasReplies && !hasNext) {
            return true;
        }
        if (hasReplies && hasNext && keepIt) {
            return true;
        }
        return false;
    }, [currentMessage, nextMessage]);
    const handlePress = useCallbackOne((reply) => () => {
        if (currentMessage) {
            const { type } = currentMessage.quickReplies;
            switch (type) {
                case 'radio': {
                    handleSend([reply])();
                    return;
                }
                case 'checkbox': {
                    if (replies.find(sameReply(reply))) {
                        setReplies(replies.filter(diffReply(reply)));
                    }
                    else {
                        setReplies([...replies, reply]);
                    }
                    return;
                }
                default: {
                    warning(`onQuickReply unknown type: ${type}`);
                    return;
                }
            }
        }
    }, [replies, currentMessage]);
    const handleSend = (repliesData) => () => {
        onQuickReply === null || onQuickReply === void 0 ? void 0 : onQuickReply(repliesData.map((reply) => ({
            ...reply,
            messageId: currentMessage._id,
        })));
    };
    if (!shouldComponentDisplay) {
        return null;
    }
    return (<View style={styles.container}>
      {currentMessage.quickReplies.values.map((reply, index) => {
            const selected = type === 'checkbox' && replies.find(sameReply(reply));
            return (<TouchableOpacity onPress={handlePress(reply)} style={[
                    styles.quickReply,
                    quickReplyStyle,
                    { borderColor: color },
                    selected && { backgroundColor: color },
                ]} key={`${reply.value}-${index}`}>
              <Text numberOfLines={10} ellipsizeMode={'tail'} style={[
                    styles.quickReplyText,
                    { color: selected ? Color.white : color },
                    quickReplyTextStyle,
                ]}>
                {reply.title}
              </Text>
            </TouchableOpacity>);
        })}
      {replies.length > 0 && (<TouchableOpacity style={[styles.quickReply, styles.sendLink]} onPress={handleSend(replies)}>
          {(renderQuickReplySend === null || renderQuickReplySend === void 0 ? void 0 : renderQuickReplySend()) || (<Text style={styles.sendLinkText}>{sendText}</Text>)}
        </TouchableOpacity>)}
    </View>);
}
QuickReplies.propTypes = {
    currentMessage: PropTypes.object.isRequired,
    onQuickReply: PropTypes.func,
    color: PropTypes.string,
    sendText: PropTypes.string,
    renderQuickReplySend: PropTypes.func,
    quickReplyStyle: StylePropType,
};
//# sourceMappingURL=QuickReplies.js.map