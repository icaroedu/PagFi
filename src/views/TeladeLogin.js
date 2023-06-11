import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';



export default props => (
    <View style={styles.container}>
      <Image source={require('../Image/logo.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Nome de usuário" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Button title="Entrar" onPress={() => { }}
        style={{
          borderWidth: 1, // Adiciona uma borda com largura 1
          borderColor: 'red', // Define a cor da borda como vermelha
          backgroundColor: 'white', // Define a cor de fundo como azul
          borderRadius: 5, // Define o raio dos cantos do botão
        }} />
    </View>
  )

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
  }

});