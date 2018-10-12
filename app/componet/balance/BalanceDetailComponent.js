import BaseComponent from "../../base/BaseComponent";
import React from "react";
import {Text, TextInput, View, StyleSheet} from "react-native";
import * as ScreenUtils from "../../utils/ScreenUtils"

export default class BalanceDetailComponent extends BaseComponent {
    render() {
        return (
            <View style={styles.father}>
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <Text style={styles.detail_text}>本月消费结算余额</Text>
                        <TextInput style={styles.detail_balance_text}>
                            ¥ 1755.44
                        </TextInput>
                    </View>
                    <View style={styles.hor_divider}/>
                    <View style={styles.inner_container}>
                        <Text style={styles.detail_text}>本月消费结算余额</Text>
                        <TextInput style={styles.detail_balance_text}>
                            ¥ 1755.44
                        </TextInput>
                    </View>
                </View>
                <View style={styles.ver_divider}/>
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <Text style={styles.detail_text}>本月消费结算余额</Text>
                        <TextInput style={styles.detail_balance_text}>
                            ¥ 1755.44
                        </TextInput>
                    </View>
                    <View style={styles.hor_divider}/>
                    <View style={styles.inner_container}>
                        <Text style={styles.detail_text}>本月消费结算余额</Text>
                        <TextInput style={styles.detail_balance_text}>
                            ¥ 1755.44
                        </TextInput>
                    </View>
                </View>
                <View style={{
                    width: ScreenUtils.screenW,
                    height: ScreenUtils.scaleSize(10),
                    marginTop:ScreenUtils.scaleSize(8),
                    backgroundColor: '#F2F2F2'
                }}/>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    father: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: ScreenUtils.screenW
    },
    inner_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input_style: {},
    detail_text: {
        marginTop: ScreenUtils.scaleSize(16),
        color: '#272b3c',
        fontSize: ScreenUtils.scaleSize(15)
    },
    detail_balance_text: {
        fontSize: ScreenUtils.scaleSize(18),
        marginTop: ScreenUtils.scaleSize(5),
        color: '#000000'
    },
    hor_divider: {
        marginTop: ScreenUtils.scaleSize(15),
        height: ScreenUtils.scaleSize(45),
        width: 1,
        backgroundColor: '#F2F2F2'
    },
    ver_divider: {
        height: 1,
        width: ScreenUtils.scaleSize(335),
        backgroundColor: '#F2F2F2',
        marginTop: ScreenUtils.scaleSize(8)
    }

});