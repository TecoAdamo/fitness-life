import React from "react";

import { StatusBar } from 'expo-status-bar';

import Routes from "./components/hooks/routes";

export default function Main() {
    return (
        <>
            <Routes />
            <StatusBar style="light" />
        </>
    )
}