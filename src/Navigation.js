import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform} from 'react-native'

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import FriendsListScreen from './FriendListScreen'
import ChatListScreen from './ChatListScreen'
import ChatScreen from './ChatScreen'
import Login from './Login'
import SettingScreen from './SettingScreen'
import UserProfileScreen from './UserProfileScreen'
import GalleryScreen from './GalleryScreen'

//Tab
const Tab = TabNavigator({
    friendslist:{screen:FriendsListScreen},
    chatlist:{screen:ChatListScreen},
    gallery:{screen:GalleryScreen}
},{
    tabBarOptions:{
        activeTintColor:'#4d3241',
        style:{backgroundColor:Platform.select({ios:'white', android:'#dedc00'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'#fff'})},
        indicatorStyle:{backgroundColor:'#fff'},
    }
})

const TabNavigationOptions = (props) => ({
    title:'Sample App',
    headerStyle:{backgroundColor:'#dedc00', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
    headerLeft:<DrawerOpenButton drawerNavigation={props.screenProps.drawerNavigation}/>
})

const StackNavigationOptions = (props) => ({
    headerStyle:{backgroundColor:'#dedc00'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    headerBackTitle:null,
})

export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.drawerNavigation.navigate('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('./../res/icon_hamburger.png')}/>
    </TouchableOpacity>
)

//Stack
const Stack = StackNavigator({
    root:{screen:(props) => <Tab screenProps={Object.assign(props.screenProps, {stackNavigation:props.navigation})}/>, navigationOptions:TabNavigationOptions},
    chat:{screen:ChatScreen}
},{
    navigationOptions:StackNavigationOptions,
    transitionConfig:getSlideFromRightTransition
})

const Stack_Setting = StackNavigator({
    root:{screen:SettingScreen}
},{
    navigationOptions:StackNavigationOptions
})

//Drawer
const Drawer = DrawerNavigator({
    main:{screen:(props) => <Stack screenProps={Object.assign(props.screenProps, {drawerNavigation:props.navigation})}/>},
    setting:{screen:(props) => <Stack_Setting screenProps={Object.assign(props.screenProps, {drawerNavigation:props.navigation})}/>}
},{
    navigationOptions:{
        drawerLockMode:'locked-closed'
    },
})

//Modal Stack (root)
const ModalStack = StackNavigator({
    logout:{screen:Login},
    login:{screen:(props) => <Drawer screenProps={{modalNavigation:props.navigation}}/>},
    userprofile:{screen:UserProfileScreen}
},{
    mode:'modal',
    headerMode:'none'
})

export default class Navigation extends React.Component{
    render(){
        return([
            <StatusBar key='statusbar' barStyle="light-content"/>,
            <ModalStack key='navigation'/>
        ])
    }
}
