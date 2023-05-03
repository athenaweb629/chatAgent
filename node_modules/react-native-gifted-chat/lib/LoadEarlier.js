import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Color from './Color';
import { StylePropType } from './utils';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.defaultColor,
        borderRadius: 15,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        backgroundColor: Color.backgroundTransparent,
        color: Color.white,
        fontSize: 12,
    },
    activityIndicator: {
        marginTop: Platform.select({
            ios: -14,
            android: -16,
            default: -15,
        }),
    },
});
export function LoadEarlier({ isLoadingEarlier = false, onLoadEarlier = () => { }, label = 'Load earlier messages', containerStyle, wrapperStyle, textStyle, activityIndicatorColor = 'white', activityIndicatorSize = 'small', activityIndicatorStyle, }) {
    return (<TouchableOpacity style={[styles.container, containerStyle]} onPress={onLoadEarlier} disabled={isLoadingEarlier} accessibilityRole='button'>
      <View style={[styles.wrapper, wrapperStyle]}>
        {isLoadingEarlier ? (<View>
            <Text style={[styles.text, textStyle, { opacity: 0 }]}>
              {label}
            </Text>
            <ActivityIndicator color={activityIndicatorColor} size={activityIndicatorSize} style={[styles.activityIndicator, activityIndicatorStyle]}/>
          </View>) : (<Text style={[styles.text, textStyle]}>{label}</Text>)}
      </View>
    </TouchableOpacity>);
}
LoadEarlier.propTypes = {
    onLoadEarlier: PropTypes.func,
    isLoadingEarlier: PropTypes.bool,
    label: PropTypes.string,
    containerStyle: StylePropType,
    wrapperStyle: StylePropType,
    textStyle: StylePropType,
    activityIndicatorStyle: StylePropType,
    activityIndicatorColor: PropTypes.string,
    activityIndicatorSize: PropTypes.string,
};
//# sourceMappingURL=LoadEarlier.js.map