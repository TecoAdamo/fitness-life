import React from "react";

import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";

import Routes from "./components/hooks/routes";

export default function Main() {
    return (
        <>
            <Routes />
            <StatusBar style="auto" />
        </>
    )
}