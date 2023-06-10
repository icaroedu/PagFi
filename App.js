import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CadastroScreen from './src/Views/CadastroScreen';
import Menu from './src/Views/TelaPrincipal';
import { TelaPrincipal } from './src/Views/TelaPrincipal';
import { Devedores } from './src/Views/Devedores';
import { CadastrandoDevedor } from './src/Views/CadastrandoDevedor';

export default props => (

  <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' />
    <CadastrandoDevedor />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



