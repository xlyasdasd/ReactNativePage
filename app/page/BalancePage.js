import BaseComponent from '../base/BaseComponent';
import {Text, View, StyleSheet} from "react-native";
import React from "react";
import Header from '../componet/balance/HeaderComponent'
import Balance from '../componet/balance/BalanceComponent'
import BalanceDetail from '../componet/balance/BalanceDetailComponent'
import BalanceTabComponent from "../componet/balance/BalanceTabComponent";
import BalanceDayDetailComponent from "../componet/balance/BalanceDetailDayComponent";
import * as ScreenUtils from '../utils/ScreenUtils'

export default class BalancePage extends BaseComponent {

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Balance/>
                <BalanceDetail/>
                <BalanceTabComponent/>
                <BalanceDayDetailComponent/>
                <View style={{backgroundColor:'#f2f2f2',flex:1,marginTop:ScreenUtils.scaleSize(11)}}/>
            </View>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})