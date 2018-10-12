import BaseComponent from "../../base/BaseComponent";
import React from "react";
import {View, StyleSheet, Text, TextInput, Image} from "react-native";
import * as ScreenUtils from "../../utils/ScreenUtils";

export default class BalanceDetailDayComponent extends BaseComponent {
    render() {
        return (
            <View style={styles.father}>
                <View style={styles.container}>
                    <View style={styles.text_container}>
                        <Text style={styles.text_style}>结算预估收入</Text>
                        <TextInput style={styles.input_style}>¥159.61</TextInput>
                    </View>
                    <View style={styles.hor_divider}/>
                    <View style={styles.text_container}>
                        <Text style={styles.text_style}>付款笔数</Text>
                        <TextInput style={styles.input_style}>144</TextInput>
                    </View>
                    <View style={styles.hor_divider}/>
                    <View style={styles.text_container}>
                        <Text style={styles.text_style}>成交预估收入</Text>
                        <TextInput style={styles.input_style}>¥504.48</TextInput>
                    </View>
                </View>
                <View style={{
                    marginTop: ScreenUtils.scaleSize(9),
                    width: ScreenUtils.screenW,
                    height: ScreenUtils.scaleSize(5),
                    backgroundColor: '#f2f2f2'
                }}/>
                <View style={styles.bottom_container}>
                    <Text style={styles.bottom_text}>我的账单</Text>
                    <Image style={styles.arrow} source={require('../../img/arrow_front.png')}/>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    arrow: {
        marginLeft:ScreenUtils.scaleSize(271),
        marginTop:ScreenUtils.scaleSize(17),
        height: ScreenUtils.scaleSize(12),
        width: ScreenUtils.scaleSize(6)
    },
    bottom_text: {
        marginLeft:ScreenUtils.scaleSize(15),
        marginTop:ScreenUtils.scaleSize(12),
        color: '#6c6c6c',
        fontSize: ScreenUtils.scaleSize(15)
    },
    bottom_container: {
        flexDirection: 'row'
    },
    father: {
        flexDirection: 'column'
    },
    text_style: {
        marginTop: ScreenUtils.scaleSize(14),
        color: '#626262',
        fontSize: ScreenUtils.scaleSize(15)
    },
    input_style: {
        color: '#000000',
        marginTop: ScreenUtils.scaleSize(3),
        fontSize: ScreenUtils.scaleSize(18)
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    hor_divider: {
        width: 1,
        marginTop: ScreenUtils.scaleSize(8),
        height: ScreenUtils.scaleSize(54),
        backgroundColor: '#f2f2f2'
    }
});