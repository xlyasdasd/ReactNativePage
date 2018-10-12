'use strict';

import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types'

import {
    StyleSheet,
    PixelRatio,
    Text,
    View,
    TouchableHighlight,
    Platform,
} from 'react-native';

import * as ScreenUtils from '../../utils/ScreenUtils';
class RadiusButtonComponent extends Component {

    static propTypes = {
        btnName: PropTypes.string,
        textStyle: Text.propTypes.style,
        btnStyle: TouchableHighlight.propTypes.style,
        underlayColor: TouchableHighlight.propTypes.underlayColor,
    };

    static defaultProps = {
        btnName: 'Button',
        underlayColor: '#4169e1',
    };


    render() {
        return (
            <View style={{
                marginLeft:ScreenUtils.scaleSize(135),
                marginRight:ScreenUtils.scaleSize(135),
                marginTop:ScreenUtils.scaleSize(93),
                position:'absolute'}}>
                <TouchableHighlight
                    underlayColor={this.props.underlayColor}
                    activeOpacity={0.5}
                    style={[styles.center, styles.btnDefaultStyle, this.props.btnStyle]}
                    onPress={this.props.onPress}>
                    <Text style={[styles.textDefaultStyle, this.props.textStyle]}>{this.props.btnName}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDefaultStyle: {
        width: 100,
        height: 20,
        backgroundColor: '#FFE61E',
        borderColor: '#563B00',
        borderRadius: 15,
        borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
    },
    textDefaultStyle: {
        fontWeight:'bold',
        fontSize: 16,
        color: '#ffffff',
    },
});

module.exports = RadiusButtonComponent;
