import React, { useContext,useState } from 'react';
import { StyleSheet, View, TextInput, Image, Button,Pressable,Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { LoginContext } from '../Context/LoginContext';
// import { Image } from "expo-image";

export default function  TeladeLogin() {
  const { login } = useContext(LoginContext);
  const navigation = useNavigation(); 
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [fail,setFail] = useState(false)
  const { userName, updateUserName } = useContext(LoginContext);

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
        <Pressable style={[styles.bottonEntrar, styles.bottonSpaceBlock]} onPress={async () => { 
          let userLogin = {nome,senha}
          const logou = await login(userLogin)
          if(logou){
            setFail(false)
            updateUserName(nome)
            navigation.replace('TelaPrincipal');
          }else{
            setFail(true)
          }
          
        }}>
          <Text style={[styles.text]}>Entrar</Text>
        </Pressable>
        <Pressable style={[styles.bottonCadastreSe, styles.bottonSpaceBlock]}
        onPress={async () => { 

            navigation.replace('CadastroScreen');
          
          
        }}>
          <Text style={[styles.text]}>Cadastre-se</Text>
        </Pressable>

        { fail ? (
          <Text style={styles.warn} >Nome ou senha incorretos!</Text>
        ) : null
        }

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
  warn:{
    color:"red"
  }
});