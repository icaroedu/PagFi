import React from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import { CardDevedores } from '../Components/CardDevedores';



export function Devedores() {

    const listaDevedores = [
        {
            id: "000",
            nome: "Leo Almeida",
            telefone: 1199911451,
            cpf: "198.879.638-689",
            valor: "R$25,00"
        },

        {
            id: "001",
            nome: "Gabriel Almeida",
            telefone: 82999114513,
            cpf: "198.879.638-689",
            valor: "50,00",
        },
        {
            id: "002",
            nome: "Amanda Almeida",
            telefone: 8999114513,
            cpf: "198.879.638-689",
            valor: "30,00"
        },
        {
            id: "003",
            nome: "Fernando Alqqmeida",
            telefone: 81999114511,
            cpf: "198.879.638-689",
            valor: "40,00"
        },
        {
            id: "004",
            nome: "Euzinho da siqqlva",
            telefone: 81991114512,
            cpf: "198.872.638-683",
            valor: "20,00"
        },
        {
            id: "005",
            nome: "Euzinho da siaalva",
            telefone: 81999114514,
            cpf: "198.879.638-689",
            valor: "20,00"
        },
        {
            id: "006",
            nome: "Euzinho da silva",
            telefone: 2324545665,
            cpf: "198.879.632-689",
            valor: "20,00"
        },

    ]

    return (
        <View style={styles.container}>

            <View style={styles.linha} />

            <FlatList
                data={listaDevedores}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardDevedores
                        nome={item.nome}
                        valor={item.valor}
                        cpf={item.cpf}
                        telefone={item.telefone}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",

    },
    linha: {
        width: "100%",
        height: 1,
        backgroundColor: "#8C8C8C",
        marginBottom: 20,
        marginTop: "20%",
    },
    perfilBotao: {
        height: "100%",
        width: "15%",
        backgroundColor: "#F3F3F3",
        justifyContent: 'flex-start',
        borderRadius: 1000,
        marginLeft: "5%"
    },

    perfilView: {
        height: "7.5%",
        width: "100%",
        justifyContent: 'flex-start',
    }

});