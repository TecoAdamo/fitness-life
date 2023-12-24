import React from "react";
import { View, StyleSheet } from "react-native";

import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment'

export default function Home() {
    return (
        <View style={styles.Container}>
            <CalendarStrip
                style={{ height: 100, paddingTop: 20 }}
                calendarColor={'#FFFFFF'}
                calendarHeaderStyle={{ color: '#22c55e' }}
                dateNumberStyle={{ color: 'black' }}
                dateNameStyle={{ color: 'black' }}
                highlightDateNumberStyle={{ color: '#22c55e' }}
                highlightDateNameStyle={{ color: '#22c55e' }}
                startingDate={moment()}
                selectedDate={moment()}
                onDateSelected={(date) => {
                    console.log('Selected Date: ', date);
                }}
            />

            <View style={styles.boxEnd}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#22c55e'
    },
    boxEnd: {
        backgroundColor: '#fff',
        width: '100%',
        height: '60%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})