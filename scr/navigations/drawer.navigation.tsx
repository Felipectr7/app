import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { ScreenCamera } from '../screens';
import { TabNavigation } from "./tab.navigation";
import {Imagens} from "../screens/Imagens"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';

type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: colors.green },
            headerTintColor: colors.white,
            drawerStyle: { backgroundColor: colors.ligthgreenn, },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation} options={{
                drawerLabel: 'Perfil',
                headerTitle: 'Perfil',
                drawerIcon: ()=> (
                    <Ionicons name="person" size={24} color={colors.white} />
                ),
            }} />
            <Drawer.Screen name='Camera' component={ScreenCamera} 
            options={{
                drawerIcon: ()=> (
                    <Ionicons name="person" size={24} color={colors.white} />
                ),
            }} />
            <Drawer.Screen name='Imagem' component={Imagens}
            options={{
                drawerIcon: ()=>(
                    <FontAwesome6 name="fish-fins" size={24} color="black" />
                ),
            }}/>
            </Drawer.Navigator>
    )
}