import React from 'react';
import { StyleSheet, View, Text } from 'react-native';




export function CardDevedoresRecentes({ nome, valor, cpf, telefone, }) {
    return (
        <View style={styles.Conatiner}>
            <View style={styles.aba} />
            <View style={styles.saldoDevedoresView}>
                <Text style={style = styles.NomeText}>{nome}</Text>
                <Text style={styles.valorText}>R$:{valor}</Text>
                <Text style={styles.infoText}>{cpf}      {telefone}</Text>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    Conatiner: {
        width: "95%",
        height: 100,
        marginVertical: 5,
        flexDirection: 'row'
    },

    NomeText: {
        fontSize: 18,
        marginVertical: "3%"
    },

    saldoDevedoresView: {
        width: "95%",
        height: "100%",
        backgroundColor: "#E0E0E0",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: "7%"
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
        marginBottom: "3%",
    },

    infoText: {
        fontSize: 11,
        marginVertical: 0,
        color: "#B6B6B6",
        fontWeight: 700,
    },



});