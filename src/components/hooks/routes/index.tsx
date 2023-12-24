import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home/Home"
import NewItem from "./pages/NewItem";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}