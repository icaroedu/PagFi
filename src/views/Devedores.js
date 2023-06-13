import React,{ useState,useEffect,Component  } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import { CardDevedores } from '../Components/CardDevedores';
import {ClientDb} from "../Service/Client"



export class Devedores extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listaDevedores: [],
        isLoading: true,
      };
    }
  
    async componentDidMount() {
      const listaDevedores = await ClientDb.listClient() || [];
      this.setState({ listaDevedores, isLoading: false });
    }
  
    render() {
      const { listaDevedores, isLoading } = this.state;
  
      if (isLoading) {
        return (
          <View style={styles.container}>
            {/* Renderizar um indicador de carregamento enquanto os dados estão sendo buscados */}
            {/* Por exemplo: <ActivityIndicator size="large" color="#0000ff" /> */}
          </View>
        );
      }
  
      return (
        <View style={styles.container}>
          <View style={styles.linha} />
  
          <FlatList
            data={listaDevedores}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardDevedores
                nome={item.Nome}
                valor={item.Divida}
                cpf={item.CPF}
                telefone={item.Telefone}
              />
            )}
          />
        </View>
      );
    }
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
  });