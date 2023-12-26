import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment'

import { useData } from "../../../data";


import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { FAB } from "react-native-elements";

import { Item } from "../../../../../types";

export default function Home() {

    const navigation = useNavigation()
    const { handleChangeDate, currentList, currentKcal } = useData()

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.circleProducts}>
                <Ionicons
                    style={styles.icon}
                    name="restaurant"
                    size={30}
                    color="#334155"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemKcal}>{item.kcal} kcal</Text>
            </View>
        </View>
    );

    const handleOneNewItem = (): void => {
        navigation.navigate("NewItem")
    }

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
                onDateSelected={handleChangeDate}
                highlightDateContainerStyle={{ borderWidth: 2, borderColor: '#fff', borderRadius: 40 }}
                scrollable={true}
                calendarAnimation={{ type: 'sequence', duration: 30 }}
            />
            <Text style={styles.titleText}>Consumindo no dia</Text>
            <View style={styles.boxTitles}>
                <Text style={styles.subTitle}>100</Text>
                <Text style={styles.subTitleText}>/{currentKcal}</Text>
            </View>

            <View style={styles.boxEnd} />

            <FlatList
                data={currentList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={false}
            />
            <FAB
                icon={<Feather name='plus' size={24} color='white' />}
                visible={true}
                placement="right"
                color="#334155"
                style={{ marginRight: 20, right: 20, bottom: 20 }}
                onPress={handleOneNewItem}
            />


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
        top: 20,
        right: 2
    },
    boxTitles: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
        left: 10
    },
    subTitle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 80,
        marginRight: 1,
        bottom: 14
    },
    subTitleText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        bottom: -2
    },
    itensContainer: {
        marginTop: 45,
        paddingHorizontal: 30,
    },
    itensText: {
        marginBottom: 8,
    },
    flatListContent: {
        paddingBottom: 100,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },

    circleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 68,
    },
    icon: {
        left: 10,
        top: 5
    },
    textContainer: {
        flexDirection: 'column',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 42,
    },
    itemKcal: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 42,
    },
    circleProducts: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#334155',
        left: 22
    },
})