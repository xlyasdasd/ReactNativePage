import BaseComponent from "../../base/BaseComponent";
import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as ScreenUtils from '../../utils/ScreenUtils'


export default class BalanceTabComponent extends BaseComponent {
    constructor(Props) {
        super(Props);
        this.state = {
            current: 1
        }
    }

    render() {
        return (
            <View style={styles.father}>
                <View style={styles.container}>
                    <View style={styles.text_container}>
                        <Text style={this.state.current === 1 ? {
                            fontSize: ScreenUtils.scaleSize(17),
                            color: '#2b2b2b'
                        } : {
                            fontSize: ScreenUtils.scaleSize(17),
                            color: '#cccccc'
                        }} onPress={() => {
                            this.setState(() => {
                                return {current: 1};
                            });

                        }}>今日</Text>
                    </View>

                    <View style={styles.hor_divider}/>
                    <View style={styles.text_container}>
                        <Text style={this.state.current === 2 ? {
                            fontSize: ScreenUtils.scaleSize(17),
                            color: '#2b2b2b'
                        } : {
                            fontSize: ScreenUtils.scaleSize(17),
                            color: '#cccccc'
                        }} onPress={() => {
                            this.setState(() => {
                                return {current: 2};
                            });
                        }}>昨日</Text>
                    </View>
                </View>
                <View style={styles.ver_divider}/>
            </View>
        )
    }


    yesterday() {

    }

}
const styles = StyleSheet.create({
    father: {
        flexDirection: 'column'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hor_divider: {
        width: 1,
        height: ScreenUtils.scaleSize(30),
        backgroundColor: '#f2f2f2'
    },
    text_container: {
        flex: 1,
        height: ScreenUtils.scaleSize(46),
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_style2: {
        fontSize: ScreenUtils.scaleSize(17),
        color: this.state === 1 ? '#cccccc' : '#2b2b2b'
    },
    ver_divider: {
        width: ScreenUtils.screenW,
        height: 1,
        backgroundColor: '#f2f2f2'
    }
});