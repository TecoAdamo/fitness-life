import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from '@expo/vector-icons';

import Home from "./pages/Home/Home"
import NewItem from "./pages/NewItem";

import Cart from './pages/Cart'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#334155',
                    inactiveTintColor: 'rgba(51, 65, 85, 0.5)',
                    labelStyle: { fontSize: 12 },
                }}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size, focused }) => (

                            <Ionicons
                                name={focused ? 'ios-home' : 'ios-home-outline'}
                                size={size}
                                color={color}
                                style={{ opacity: focused ? 1 : 0.5 }}
                            />

                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarLabel: 'Food',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons
                                name={focused ? 'fast-food' : 'fast-food-outline'}
                                size={size}
                                color={color}
                                style={{ opacity: focused ? 1 : 0.5 }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NewItem"
                component={NewItem}
                options={{
                    headerTitleAlign: 'center',
                    title: "Adicionar alimento",
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#334155",
                    },
                }}
            />
        </Stack.Navigator>
    );
}
