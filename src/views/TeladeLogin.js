import React, { useContext,useState } from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { LoginContext } from '../Context/LoginContext';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function  TeladeLogin() {
  const { login } = useContext(LoginContext);
  const navigation = useNavigation(); 
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleNome = (text) => {
    setNome(text);
  };
  const handleSenha= (text) => {
    setSenha(text);
  };

    return (
      <View style={styles.container}>
        <Image source={require('../Image/logo.png')} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Nome de usuário"  onChangeText={handleNome} value={nome}/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={handleSenha} value={senha} />
        <Button title="Entrar" onPress={async () => { 
          let userLogin = {nome,senha}
          const logou = await login(userLogin)
          if(logou){
            navigation.replace('Devedores');
          }
          
          
        }}
          style={{
            borderWidth: 1, // Adiciona uma borda com largura 1
            borderColor: 'red', // Define a cor da borda como vermelha
            backgroundColor: 'white', // Define a cor de fundo como azul
            borderRadius: 5, // Define o raio dos cantos do botão
          }} />
      </View>
    )
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
  }

});