import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet,Pressable,Text } from 'react-native';
import { userDb } from '../Services/User';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Confirmarsenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');
  const [fail,setFail] = useState(false)
  const [failMessage,setFailMessage] = useState('')

  const navigation = useNavigation(); 

  const cadastrar = async () => {

    if(checkValues()){
      setFail(false)
      const user = {Nome:nome,Email:email,Senha:senha,Telefone:telefone,CPF:cpf}
      const Cadastro = await userDb.addUser(user)
      // console.log(user)
      if(Cadastro?.id){
        navigation.replace('TeladeLogin');
      }
    }else{
      setFail(true)
    }
    return true
  };

  const checkValues = () =>{
    if(nome!="" && email !="" && senha !="" && telefone !="" && cpf !== "" && Confirmarsenha !== ""){
      if(senha === Confirmarsenha){
        return true
      }else{
        setFailMessage("Senhas não Iguais!")
        return false
      }
    }else{
      setFailMessage("Não são permitidos campos vazios!")
      return false
    }
  }

  const formatCpf = (text) => {
    // Remove todos os caracteres não numéricos do texto
    let cleanedText = text.replace(/\D/g, '');

    // Aplica a máscara do CPF (###.###.###-##)
    let formattedText = '';
    for (let i = 0; i < cleanedText.length; i++) {
      if (i === 3 || i === 6) {
        formattedText += '.';
      } else if (i === 9) {
        formattedText += '-';
      }
      formattedText += cleanedText.charAt(i);
    }

    return formattedText;
  };

  const handleCpfChange = (text) => {
    const formattedCpf = formatCpf(text);
    setCPF(formattedCpf);
  };

  const formatTelefone = (text) => {
    // Remove todos os caracteres não numéricos do texto
    let cleanedText = text.replace(/\D/g, '');

    // Verifica o tamanho do texto e aplica a máscara apropriada
    if (cleanedText.length <= 10) {
      // Formato: (##) ####-####
      let formattedText = cleanedText.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      return formattedText;
    } else {
      // Formato: (##) #####-####
      let formattedText = cleanedText.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      return formattedText;
    }
  };

  const handleTelefoneChange = (text) => {
    const formattedTelefone = formatTelefone(text);
    setTelefone(formattedTelefone);
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
        value={telefone}
        onChangeText={handleTelefoneChange}
        keyboardType="numeric"
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={handleCpfChange}
        maxLength={14}
        keyboardType="numeric"
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

        { fail ? (
          <Text style={styles.warn} >{failMessage}</Text>
        ) : null
        }


      <Pressable  onPress={ async () => { await cadastrar()}} style={styles.bottonSpaceBlock}>
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
  warn:{
    color:"red",
    marginBottom:12
  }
});


