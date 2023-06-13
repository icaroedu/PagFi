import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import { CardDevedores } from '../Components/CardDevedores';
import { ClientDb } from '../services/Client';


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


    const [modalVisible, setModalVisible] = useState(false);
    const [usuario, setUsuario] = useState();

    const renderModal = (item) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>{item}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        )
    }
    return (
        <View style={styles.container}>

            {renderModal(usuario)}


            <View style={styles.linha} />

            <FlatList
                data={listaDevedores}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <>
                            <CardDevedores
                                nome={item.nome}
                                valor={item.valor}
                                cpf={item.cpf}
                                telefone={item.telefone}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setUsuario(item.nome)

                                }}
                            />

                        </>

                    )

                }}
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
    },









    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

});