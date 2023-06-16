import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, Image, ScrollView, Modal } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NavTab } from '../Components/NavTab';
import { ClientDb } from '../services/Client';




export default function CadastrandoDevedor() {


  async function addClient(nome, telefone, cpf, valor) {

    console.log("Nome::::::", nome)
    const client = {
      "Nome": nome,
      "Telefone": telefone,
      "CPF": cpf,
      "Divida": valor,
    }

    await ClientDb.addClient(client);
  }
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  const renderModal = () => {
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
            <Text style={styles.modalText}>Cadastro realizado com sucesso!</Text>

            <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
              <Pressable
                style={[styles.buttonModal]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Concluir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Cadastrando Devedor</Text>
      <View style={styles.linha} />
      {renderModal()}

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.iputBox}>
          <Text style={styles.inputTitle}>Nome e sobrenome:</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite aqui'
            onChangeText={setNome}
          />
        </View>


        <View style={styles.iputBox}>
          <Text style={styles.inputTitle}>Telefone:</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite aqui'
            onChangeText={setTelefone}
          />
        </View>

        <View style={styles.iputBox}>
          <Text style={styles.inputTitle}>CPF:</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite aqui'
            onChangeText={setCpf}
          />
        </View>

        <View style={styles.iputBox}>
          <Text style={styles.inputTitle}>Valor:</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite aqui'
            onChangeText={setValor}
          />
        </View>
      </ScrollView>


      <View style={styles.viewButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            addClient(nome, telefone, cpf, valor)
            setModalVisible(!modalVisible)
          }}
        >
          <Text style={styles.textButton}>Emprestar</Text>
        </Pressable>
      </View>
      <NavTab />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    padding: 5,
    paddingTop: 30,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold"
  },

  linha: {
    width: "100%",
    height: 1,
    backgroundColor: "#C6C6C6",
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  iputBox: {
    width: "90%",
    borderRadius: 10,
    marginLeft: "5%",
    height: 100,
    backgroundColor: "#F3F3F3",
    padding: 10,
    marginVertical: 10,

  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  viewButton: {
    width: "100%",
    height: "10%",
    fontWeight: "bold",
    paddingLeft: "50%",
    paddingRight: "5%",
  },

  button: {
    backgroundColor: "black",
    width: "100%",
    height: "70%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "white",
    fontWeight: "bold"
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
  buttonModal: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    width: "60%",
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

