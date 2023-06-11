import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Confirmarsenha, setConfrimarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');

  const cadastrar = () => {
    // Aqui você pode adicionar a lógica para enviar os dados de cadastro
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', Confirmarsenha);
    console.log('Telefone:', telefone);
    console.log('CPF:', cpf);
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
        value={senha}
        onChangeText={text => setConfirmarSenha(text)}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
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
});


