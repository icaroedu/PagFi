import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet,Pressable,Text } from 'react-native';
import { userDb } from '../Service/User';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Confirmarsenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');

  const navigation = useNavigation(); 

  const cadastrar = async () => {
    // Aqui você pode adicionar a lógica para enviar os dados de cadastro
    const user = {Nome:nome,Email:email,Senha:senha,Telefone:telefone,CPF:cpf}
    const Cadastro = await userDb.addUser(user)
    // console.lof(Cadastro)
    if(Cadastro.id){
      navigation.replace('TeladeLogin');
    }

  };

  return (
    <View style={styles.container}>
      <Image source={require('../Image/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        secureTextEntry={true}
        value={telefone}
        onChangeText={text => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        secureTextEntry={true}
        value={cpf}
        onChangeText={text => setCPF(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={text => setSenha(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        value={Confirmarsenha}
        onChangeText={text => setConfirmarSenha(text)}
      />

      <Pressable  onPress={cadastrar} style={styles.bottonSpaceBlock}>
        <Text style={[styles.text]}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};

export default CadastroScreen;

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
  bottonSpaceBlock: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: "row",
    backgroundColor: "#FF8A01",
    borderRadius: 10,
    position:"relative",
    color:"#FFFFFF",
    marginBottom:10
  },
  text: {
    color:"#FFFFFF"
  },  
  perfilView: {
    height: "7.5%",
    width: "100%",
    justifyContent: 'flex-start',
  },
});


