import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Modal } from 'react-native';




export function CardDevedores({ nome, valor, cpf, telefone, onPress }) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View style={styles.Conatiner}>
                <View style={styles.aba} />
                <View style={styles.saldoDevedoresView}>
                    <Text style={styles.NomeText}>{nome}</Text>
                    <Text style={styles.valorText}>R$:{valor}</Text>
                    <View style={styles.infosView}>
                        <Text style={styles.infoText}>cpf:{cpf}</Text>
                        <Text style={styles.infoText}>tel:{telefone}</Text>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={styles.botao}
                            onPress={onPress}
                        >
                            <Text style={styles.icon}>$</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
            <View style={styles.linha} />
        </View>

    )
}

const styles = StyleSheet.create({
    Conatiner: {
        width: "95%",
        height: 100,
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: 'row'
    },

    linha: {
        width: "100%",
        height: 2,
        backgroundColor: "#E0E0E0",
        marginTop: "20%",
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
        marginBottom: "0%",
    },

    infoText: {
        fontSize: 11,
        color: "#B6B6B6",
        fontWeight: 700,
        marginRight: 10
    },
    infosView: {
        flexDirection: "row",
        alignItems: 'center',
        height: "30%",
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: 24,
        fontWeight: 'bold'

    },
    botao: {
        marginRight: "10%",
        marginBottom: "3%",
        width: "10%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    linha: {
        width: "100%",
        height: 1,
        backgroundColor: "#8C8C8C",
        marginBottom: 20,
        marginTop: 10,
    },



});