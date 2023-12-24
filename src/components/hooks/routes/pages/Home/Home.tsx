import React from "react";
import { View, StyleSheet } from "react-native";

import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment'

export default function Home() {
    return (
        <View style={styles.Container}>
            <CalendarStrip
                style={{ height: 140, paddingTop: 40 }}
                calendarColor={'#334155'}
                calendarHeaderStyle={{ color: '#fff' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                highlightDateNumberStyle={{ color: '#FFFF00' }}
                highlightDateNameStyle={{ color: '#FFFF00' }}
                startingDate={moment()}
                selectedDate={moment()}
                onDateSelected={(date) => {
                    console.log('Selected Date: ', date);
                }}
                highlightDateContainerStyle={{ borderWidth: 2, borderColor: '#fff', borderRadius: 40 }}
                scrollable={true}
                calendarAnimation={{ type: 'sequence', duration: 30 }}
            />

            <View style={styles.boxEnd}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#334155'
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