import BaseComponent from "../../base/BaseComponent";
import {View, StyleSheet, Image, Text, TextInput} from "react-native";
import React from "react";
import * as ScreenUtils from '../../utils/ScreenUtils'
import RadiusBtn from '../view/RadiusButtonComponent';

export default class BalanceComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            balance: '¥ 0.91'
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../img/bg.png')}/>
                <Text style={styles.text}>账户余额</Text>
                <TextInput
                    style={styles.balance_text}
                >{this.state.balance}</TextInput>
                <RadiusBtn
                    style={styles.apply_btn_style}
                    btnName='立即提现'
                    textStyle={styles.apply_btn_text}
                    btnStyle={styles.apply_btn}
                    underlayColor='#4169e1'
                    onPress={this._pressCreditClick}
                />
            </View>
        )
    }
    _pressCreditClick(){
        alert("提现")
    }
}

const styles = StyleSheet.create({
    container: {
        height: ScreenUtils.scaleHeight(137),
        width: ScreenUtils.screenW
    },
    bg: {
        height: ScreenUtils.scaleHeight(137),
        width: ScreenUtils.screenW
    },
    text: {
        right: 0,
        fontSize: ScreenUtils.scaleSize(13),
        position: 'absolute',
        marginLeft: ScreenUtils.scaleSize(155),
        marginRight: ScreenUtils.scaleSize(155),
        marginTop: ScreenUtils.scaleSize(25)

    },
    balance_text: {
        position: 'absolute',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: ScreenUtils.scaleSize(24),
        marginTop: ScreenUtils.scaleSize(47),
        marginLeft: ScreenUtils.scaleSize(140),
        marginRight: ScreenUtils.scaleSize(140),
    },
    apply_btn_text: {
        fontSize: ScreenUtils.scaleSize(14),
        color: '#272B3C',
    },
    apply_btn: {
        width: ScreenUtils.scaleSize(92),
        height: ScreenUtils.scaleSize(26),
        borderRadius: ScreenUtils.scaleSize(25),
    },
    apply_btn_style:{
        position: 'absolute',
        marginLeft: ScreenUtils.scaleSize(137),
        marginRight: ScreenUtils.scaleSize(137),
    }
});