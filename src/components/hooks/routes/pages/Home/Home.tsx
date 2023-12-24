import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment'
import Products from "../../../../Products";

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
            <Text style={styles.titleText}>Consumindo no dia</Text>
            <View style={styles.boxTitles}>
                <Text style={styles.subTitle}>100</Text>
                <Text style={styles.subTitleText}>/kcal</Text>
            </View>

            <View style={styles.boxEnd} />

            <Products />

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
    },
    titleText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    boxTitles: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    subTitle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 80,
        marginRight: 10,
    },
    subTitleText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 35
    },
    itensContainer: {
        marginTop: 45,
        paddingHorizontal: 30,
    },
    itensText: {
        marginBottom: 8,
    }
})
