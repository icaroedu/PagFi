import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation, useFocusEffect } from '@react-navigation/native';

import { CardDevedoresRecentes } from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';
import { ClientDb } from '../services/Client';
import { NavTab } from '../Components/NavTab';





export default function TelaPrincipal() {

    const [listaCliente, setListaCliente] = useState([])
    const navigation = useNavigation();
    const clientesRecentes = listaCliente.slice(0, 5);




    async function getList() {
        const lista = await ClientDb.listClient();

        setListaCliente(lista);
    }

    function handlePerfil() {
        navigation.replace('PerfilAdmin');
    }

    useEffect(() => {
        getList();
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getList();
        }, [])
    );




    return (

        <View style={styles.container}>

            <View style={styles.perfilView}>
                <Pressable
                    style={styles.perfilBotao}
                    onPress={handlePerfil}
                />
            </View>

            <View style={styles.linha} />

            <View style={{ paddingLeft: 20, width: "100%", marginBottom: 10, flexDirection: "row", alignItems: "baseline" }} >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Devedores recentes: </Text>
                <Pressable style={{ marginLeft: "22%" }}>
                    <Text style={{ color: "black", fontWeight: "bold" }}
                        onPress={() => navigation.navigate("Devedores")}
                    >Ver todos</Text>
                </Pressable>
            </View>

            <ScrollView style={{ paddingLeft: 10, maxHeight: 700 }}>
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

            <NavTab></NavTab>
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
        backgroundColor: "white",
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
        height: "6.5%",
        width: "100%",
        justifyContent: 'flex-start',
    }

});