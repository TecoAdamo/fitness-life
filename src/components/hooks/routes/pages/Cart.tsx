import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import { useState } from "react";

export default function Cart() {
    const [isModalVisible, setModalVisible] = useState(false);


    const foodItem = [
        'Uva',
        'Maçã',
        'Banana',
        'Tomate',
        'Cenoura',
        'Laranja',
        'Pêssego',
        'Morango',
        'Espinafre',
        'Brócolis',
        'Couve-flor',
        'Abobrinha',
        'Arroz Integral',
        'Quinoa',
        'Aveia',
        'Massa de Trigo Integral',
        'Pão Integral',
        'Cevada',
        'Peito de Frango',
        'Peixe',
        'Ovos',
        'Feijão',
        'Lentilhas',
        'Tofu',
        'Leite',
        'Iogurte Natural',
        'Queijo',
        'Amêndoas',
        'Nozes',
        'Iogurte Grego',
        'Grão-de-Bico',
        'Ervilhas',
        'Feijão Preto',
        'Lentilhas',
        'Mel',
        'Trigo'
    ];

    const renderItem = ({ item }) => {
        return <FoodItem foodName={item} />;
    };

    const FoodItem = ({ foodName }) => {
        return (
            <View style={styles.card}>
                <View style={styles.foodInfo}>
                    <Text>{foodName}</Text>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Feather name="plus" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        );
    };



    return (
        <View style={styles.Container}>

            <View style={styles.boxEnd}>
                <FlatList
                    data={foodItem}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    showsVerticalScrollIndicator={false}

                />
                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Insira a quantidade de kcal a ser consumida:</Text>
                            {/* <TextInput
                            placeholder="Insira "
                            /> */}
                            <TouchableOpacity style={styles.btnModal}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.textBtnModal}>Fechar Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#334155',
    },
    boxEnd: {
        backgroundColor: '#fff',
        width: '115%',
        height: '90%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 18,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        width: '90%',
        left: 20,
        top: 34,
        flexDirection: 'row',
        gap: 90,
        alignItems: 'center'
    },
    addButton: {
        padding: 8,
    },
    foodInfo: {
        flex: 1,
        marginRight: 20, // Adiciona espaçamento entre o texto e o ícone
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#334155',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        height: '60%',
        top: '30%'
    },
    modalText: {
        textAlign: 'center',
        color: '#fff'
    },
    btnModal: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: '12%',
        top: '80%',
        width: '48%',
        left: 70
    },
    textBtnModal: {
        color: '#334155',
        top: 4,
        textAlign: 'center',
    }

})