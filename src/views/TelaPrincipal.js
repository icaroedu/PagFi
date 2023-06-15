import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { CardDevedoresRecentes } from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';
import { ClientDb } from '../services/Client';






export function TelaPrincipal() {

    async function getList() {
        const lista = await ClientDb.listClient();

        setListaCliente(lista);
    }

    useEffect(() => {
        getList();
    }, [])



    const [listaCliente, setListaCliente] = useState([])
    console.log(listaCliente)
    const clientesRecentes = listaCliente.slice(0, 5);
    return (

        <View style={styles.container}>

            <View style={styles.perfilView}>
                <Pressable
                    style={styles.perfilBotao}
                />
            </View>

            <View style={styles.linha} />

            <View style={{ paddingLeft: 20, width: "100%", marginBottom: 5, flexDirection: "row", alignItems: "baseline" }} >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Devedores recentes: </Text>
                <Pressable style={{ marginLeft: "22%" }}>
                    <Text style={{ color: "#B6B6B6", fontWeight: "bold" }}>Ver todos</Text>
                </Pressable>
            </View>

            <ScrollView style={{ paddingLeft: 10 }}>
                {
                    clientesRecentes.map((item, index) => {
                        return (
                            <CardDevedoresRecentes
                                key={index}
                                nome={item.Nome}
                                cpf={item.CPF}
                                telefone={item.Telefone}
                                valor={item.Divida}
                            />
                        )
                    })
                }
            </ScrollView>
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