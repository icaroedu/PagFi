import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default props => (
    <View style={styles.Conatiner}>
        <View style={styles.aba} />
        <View style={styles.saldoDevedoresView}>
            <Text style={styles.NomeText}>Nome e sobrenome do devedor</Text>
            <Text style={styles.valorText}>R$: 00,00</Text>
            <View style={styles.infosView}>
                <Text style={styles.infoText}>cpf:234.048.940-07</Text>
                <Text style={styles.infoText}>tel:081999114513</Text>
                <Pressable
                    activeOpacity={.7}

                >
                    <Text>$</Text>
                </Pressable>
            </View>



        </View>
    </View >
)

const styles = StyleSheet.create({
    Conatiner: {
        width: "90%",
        height: 100,
        marginVertical: 5,
        flexDirection: 'row'
    },

    NomeText: {
        fontSize: 18, marginVertical: 10
    },

    saldoDevedoresView: {
        width: "95%",
        height: "100%",
        backgroundColor: "#E0E0E0",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 20
    },

    aba: {
        width: "5%",
        height: "100%",
        backgroundColor: "#FF8A01",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    valorText: {
        fontSize: 20,
        fontWeight: "500",
        color: "black",
        marginBottom: 15,
    },

    infoText: {
        fontSize: 11,
        marginVertical: 1,
        color: "#B6B6B6",
        fontWeight: 700,
        marginRight: 10
    },
    infosView: {
        flexDirection: "row"
    }



});