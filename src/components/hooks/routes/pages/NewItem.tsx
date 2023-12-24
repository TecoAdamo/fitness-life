import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";

import { Button, Input } from "react-native-elements";



export default function NewItem() {
    const [name, setName] = useState('')
    const [kcal, setKcal] = useState('')

    const handleOnSave = () => {
        console.log(name, kcal)
    }
    return (
        <View style={styles.container}>
            <Input style={styles.FormContainer}
                label="Nome"
                placeholder="Descrição:"
                labelStyle={{ color: 'black' }}
                value={name}
                onChangeText={setName}

            />
            <Input style={styles.FormContainer}
                label="Kcal"
                placeholder="Somente números:"
                labelStyle={{ color: 'black' }}
                value={kcal}
                onChangeText={setKcal}

            />
            <Button style={styles.ButtonContainer}
                title="Salvar"
                onPress={handleOnSave}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    FormContainer: {
        marginTop: 30,

    },
    ButtonContainer: {
        width: '10%',

    }

})