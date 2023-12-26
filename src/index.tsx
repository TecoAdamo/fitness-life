import React from "react";

import { StatusBar } from 'expo-status-bar';

import Routes from "./components/hooks/routes";
import { DataProvider } from "./components/hooks/data";

export default function Main() {
    return (
        <>
            <DataProvider>

                <Routes />
                <StatusBar style="light" />
            </DataProvider>
        </>
    )
}