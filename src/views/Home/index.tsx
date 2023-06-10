import React,{ useState, useContext }  from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from "@react-navigation/native"; 



export default function Home() {


  return (
    <View style={styles.container}>
    <Image source={require('../../image/logo.png')} style={styles.logo} />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button:{
    borderWidth: 1, // Adiciona uma borda com largura 1
    borderColor: 'red', // Define a cor da borda como vermelha
    backgroundColor: 'white', // Define a cor de fundo como azul
    borderRadius: 5, // Define o raio dos cantos do botão
    paddingHorizontal:10,
    paddingVertical:10,

  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

});