import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import { CardDevedores } from '../Components/CardDevedores';
import { ClientDb } from '../services/Client';


export function Devedores() {

  async function getList() {
    const listaDevedor = await ClientDb.listClient() || [];
    setListaCliente(listaDevedor);
  }

  async function updateList() {
    const listaDevedor = await ClientDb.setClient();
    setListaCliente(listaDevedor);
  }



  useEffect(() => {
    getList();
  }, [])

  useEffect(() => {
    updateList();
  }, [listaCliente])


  function handleRemoveClient(id) {
    setListaCliente(oldState => oldState.filter(listaCliente => listaCliente.id !== id));
  }

  const [listaCliente, setListaCliente] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();
  console.log("Minha lista aqui:", listaCliente)

  const renderModal = (item) => {
    return (
      <Modal

        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Devedor realizou o pagamento?</Text>

            <View style={{ width: "100%", height: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  handleRemoveClient(item)
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Sim</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Não</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  return (
    <View style={styles.container}>

      {renderModal(id)}


      <View style={styles.linha} />

      <FlatList
        data={listaCliente}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <CardDevedores
                nome={item.Nome}
                valor={item.Divida}
                cpf={item.CPF}
                telefone={item.Telefone}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setId(item.id)

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: "95%",
    height: "20%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "40%",
    height: "60%",
    justifyContent: "center"
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: "500",
    fontSize: 18,
    width: "100%"
  },

});