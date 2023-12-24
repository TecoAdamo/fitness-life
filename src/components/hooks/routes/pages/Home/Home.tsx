import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment'

export default function Home() {

    const data = [
        {
            id: '127245',
            name: 'Arroz',
            kcal: 130,
            date: moment()
        },
        {
            id: '1235467',
            name: 'Pão',
            kcal: 265,
            date: moment()
        },
        {
            id: '15467',
            name: 'Peixe',
            kcal: 206,
            date: moment()
        },

    ]

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

            <View style={styles.itensContainer}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Text style={styles.itensText}>{item.name}</Text>}
                />
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
        marginTop: 30, // Ajuste aqui para o espaço desejado
        paddingHorizontal: 30,
    },
    itensText: {
        marginBottom: 8,
    }
})
