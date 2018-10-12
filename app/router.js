/**
 * Created by guoshuyu on 2017/11/7.
 */
import React, {Component} from 'react';
import BalancePage from './page/BalancePage';
import { createStackNavigator } from 'react-navigation';


const router = createStackNavigator({
    BalancePage: {screen: BalancePage},
},{
    initialRouteName: 'BalancePage',
});



export default router;