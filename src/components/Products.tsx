import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";

import moment from 'moment'
import { Item } from "../types";

import { Ionicons, Feather } from "@expo/vector-icons";
import { FAB } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


export default function Products() {
    const navigation = useNavigation()
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
        {
            id: '111222',
            name: 'Banana',
            kcal: 105,
            date: moment()
        },
        {
            id: '222333',
            name: 'Cenoura',
            kcal: 41,
            date: moment()
        },
        {
            id: '333444',
            name: 'Iogurte',
            kcal: 155,
            date: moment()
        },
        {
            id: '444555',
            name: 'Ovos',
            kcal: 68,
            date: moment()
        },
        {
            id: '555666',
            name: 'Abacate',
            kcal: 160,
            date: moment()
        },
        {
            id: '666777',
            name: 'Tomate',
            kcal: 18,
            date: moment()
        },
        {
            id: '777888',
            name: 'Batata',
            kcal: 77,
            date: moment()
        },
        {
            id: '888999',
            name: 'Espinafre',
            kcal: 23,
            date: moment()
        },
        {
            id: '999000',
            name: 'Cebola',
            kcal: 40,
            date: moment()
        },
        {
            id: '000111',
            name: 'Laranja',
            kcal: 62,
            date: moment()
        },
        {
            id: '112233',
            name: 'Leite',
            kcal: 42,
            date: moment()
        },
        {
            id: '445566',
            name: 'Frango',
            kcal: 239,
            date: moment()
        },
        {
            id: '778899',
            name: 'Maçã',
            kcal: 95,
            date: moment()
        },
        {
            id: '001122',
            name: 'Feijão',
            kcal: 100,
            date: moment()
        },
        {
            id: '334455',
            name: 'Chocolate',
            kcal: 210,
            date: moment()
        },
        {
            id: '667788',
            name: 'Queijo',
            kcal: 402,
            date: moment()
        },
        {
            id: '990011',
            name: 'Melancia',
            kcal: 30,
            date: moment()
        },
        {
            id: '223344',
            name: 'Aveia',
            kcal: 68,
            date: moment()
        },
        {
            id: '556677',
            name: 'Manteiga',
            kcal: 102,
            date: moment()
        },
        {
            id: '889900',
            name: 'Mel',
            kcal: 304,
            date: moment()
        }

    ]

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
        <View style={styles.container}>
            <FlatList
                data={data}
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
    container: {
        flex: 1,
        marginTop: 45,
        paddingHorizontal: 30,
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
    },
    icon: {
        left: 8,
        top: 6
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
        borderColor: '#334155'
    },
})