import React, { useState } from 'react';
import { StyleSheet, View,TextInput, Text, Pressable,Image } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



export default function CadastrandoDevedor() {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rectangleTextInput1, setRectangleTextInput1] = useState();
  const [rectangleTextInput2, setRectangleTextInput2] = useState();
  const [rectangleTextInput3, setRectangleTextInput3] = useState();
  const navigation = useNavigation();

    return (
        <View style={styles.emprestar}>
          <View style={styles.emprestarChild} />
          <View style={styles.emprestarInner}>
            <View style={styles.instanceChild} />
          </View>

          <Pressable style={[styles.bottonEmprestar, styles.iconDollarAlt1SpaceBlock]}>
            <Text style={[styles.emprestar1, styles.emprestar1Typo]}>
              Emprestar
            </Text>
          </Pressable>


          <Pressable
            style={[styles.iconChevronLeft, styles.iconSpaceBlock]}
            onPress={() => navigation.navigate("TelaPrincipal")}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../Image/vector12.png")}
            />
          </Pressable>
          <View style={[styles.iconUserAdd, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../Image/vector21.png")}
            />
          </View>


          <Text
            style={[styles.cadastrandoDevedor, styles.emprestar1Typo]}
          >{`Cadastrando Devedor`}</Text>
          <Text style={[styles.nomeCompleto, styles.cpfTypo]}>Nome completo:</Text>
          <TextInput
            style={[styles.emprestarItem, styles.emprestarChildLayout]}
            placeholder="Place your text"
            value={rectangleTextInput}
            onChangeText={setRectangleTextInput}
          />

          <Text style={[styles.telefone, styles.cpfTypo]}>Telefone:</Text>
          <TextInput
            style={[styles.rectangleRnktextinput, styles.emprestarChildLayout]}
            placeholder="Place your text"
            value={rectangleTextInput1}
            onChangeText={setRectangleTextInput1}
          />

          <Text style={[styles.cpf, styles.cpfTypo]}>CPF:</Text>
          <TextInput
            style={[styles.emprestarChild1, styles.emprestarChildLayout]}
            placeholder="Place your text"
            value={rectangleTextInput2}
            onChangeText={setRectangleTextInput2}
          />

          <Text style={[styles.valor, styles.cpfTypo]}>Valor:</Text>
          <TextInput
            style={[styles.emprestarChild2, styles.emprestarChildLayout]}
            placeholder="Place your text"
            value={rectangleTextInput3}
            onChangeText={setRectangleTextInput3}
          />        

      </View>
      );
    };
   
const styles = StyleSheet.create({
  
});

