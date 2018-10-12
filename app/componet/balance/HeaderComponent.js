import BaseComponent from "../../base/BaseComponent";
import * as ScreenUtils from '../../utils/ScreenUtils'
import {Image, Text, View,StyleSheet} from "react-native";
import React from "react";

export default class HeaderComponent extends BaseComponent {
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.arrow_back} source={require("../../img/arrow_back.png")} />
                <Text style={styles.title}>
                    收益
                </Text>
                <Image style={styles.icon_ask} source={require("../../img/ask.png")}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        height: ScreenUtils.scaleHeight(62),
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    arrow_back:{
        position:'absolute',
        marginLeft:ScreenUtils.scaleSize(16),
        marginTop:ScreenUtils.scaleSize(33),
        // left:ScreenUtils.scaleSize(16),
        // bottom:ScreenUtils.scaleSize(14),
        height:ScreenUtils.scaleSize(15),
        width:ScreenUtils.scaleSize(8)
    },
    icon_ask:{
        position:'absolute',
        resizeMode:'stretch',
        marginLeft:ScreenUtils.scaleSize(330),
        marginTop:ScreenUtils.scaleSize(32),
        // left:ScreenUtils.scaleSize(330),
        // bottom:ScreenUtils.scaleSize(13),
        width:ScreenUtils.scaleSize(19),
        height:ScreenUtils.scaleSize(20),
    },
    title:{
        right:0,
        fontSize:ScreenUtils.scaleSize(15),
        position:'absolute',
        marginLeft:ScreenUtils.scaleSize(168),
        marginRight:ScreenUtils.scaleSize(168),
        marginTop:ScreenUtils.scaleSize(31)

    }
});