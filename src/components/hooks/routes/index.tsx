import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from '@expo/vector-icons';

import Home from "./pages/Home/Home"
import NewItem from "./pages/NewItem";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" size={size} color={'#334155'} />
                        ),
                        headerShown: false,
                        tabBarLabelStyle: { color: '#334155' },
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
