import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "./types/Drawer";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from "react-native-safe-area-context";

import CalendarStackNavigator from "./Calendar/StackCalendarNavigator";
import NotificationStackNavigator from "./Notifications/StackNotificationNavigator";
import HomeScreen from "../features/settings/presentation/Home";
import SettingsStackNavigation from "./Main/StackNavigator";
import ContactStackNavigator from "./Contact/StackContactNavigator";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigation() {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <Drawer.Navigator
                initialRouteName="index"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#880000', // Rojo oscuro en el header
                    },
                    headerTintColor: '#FFFFFF', // Letras blancas en el header
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#FFFFFF', 
                    },
                    headerStatusBarHeight: 0,
                    drawerStyle: {
                        backgroundColor: '#222222', // Fondo oscuro del drawer
                    },
                    drawerActiveTintColor: 'red', // rojo para ítem activo
                    drawerInactiveTintColor: '#FFFFFF', // Texto blanco para ítems inactivos
                    drawerLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                    },
                }}
            >
                <Drawer.Screen
                    name="index"
                    component={HomeScreen}
                    options={{
                        title: 'Inicio',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="contactsMain"
                    component={ContactStackNavigator}
                    options={{
                        title: 'Contactos',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="address-book" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="calendarMain"
                    component={CalendarStackNavigator}
                    options={{
                        title: 'Calendario',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="calendar-alt" color={color} size={size} />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="settingsMain"
                    component={SettingsStackNavigation}
                    options={{
                        title: 'Configuraciones',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="cog" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff', // con esto la barra de arriba de notificaciones nhace que se
                                    // color blanco
    },
});
