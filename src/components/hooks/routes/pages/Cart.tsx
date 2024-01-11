import { View, Text, StyleSheet } from "react-native";

export default function Cart() {
    return (
        <View style={styles.Container}>
            <View style={styles.boxEnd} />
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
})