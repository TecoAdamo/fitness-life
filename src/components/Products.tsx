import { View, StyleSheet, Text, FlatList } from "react-native";
import moment from 'moment'
import { Item } from "../types";

export default function Products() {
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

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.circleProducts}>

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemKcal}>{item.kcal} kcal</Text>
            </View>


        </View>
    );

    return (
        <View style={styles.itemsContainer}>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

        </View>


    )
}

const styles = StyleSheet.create({

    itemsContainer: {
        marginTop: 45,
        paddingHorizontal: 30,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    circleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 28,
    },
    itemKcal: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 28,

    },
    circleProducts: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,

    },
})