import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';
import { TouchableOpacity } from 'react-native-gesture-handler';





export function CadastrandoDevedor() {

    const listaDevedores = [
        {
            nome: "Leo Almeida",
            telefone: 81999114513,
            cpf: "198.879.638-689",
            valor: "R$25,00"
        },

        {
            nome: "Gabriel Almeida",
            telefone: 81999114513,
            cpf: "198.879.638-689",
            valor: "R$50,00",
        },
        {
            nome: "Amanda Almeida",
            telefone: 81999114513,
            cpf: "198.879.638-689",
            valor: "R$30,00"
        },
        {
            nome: "Fernando Almeida",
            telefone: 81999114513,
            cpf: "198.879.638-689",
            valor: "R$40,00"
        },
        {
            nome: "Euzinho da silva",
            telefone: 81999114513,
            cpf: "198.879.638-689",
            valor: "R$20,00"
        },

    ]

    return (
        <View style={styles.container}>

            <View style={styles.linha} />

            <View style={{ paddingLeft: 20, width: "100%", marginBottom: 5, }} >
                <Text style={{ fontSize: 18 }}>Aqui vai adicionar um devedor </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 5,
        paddingTop: 30,
    },
    linha: {
        width: "100%",
        height: 1,
        backgroundColor: "#8C8C8C",
        marginBottom: 20,
        marginTop: 10,
    },

});