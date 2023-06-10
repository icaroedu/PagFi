import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CadastroScreen from './src/Views/CadastroScreen';
import Menu from './src/Views/TelaPrincipal';
import TelaPrincipal from './src/Views/TelaPrincipal';

export default props => (

  <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' />
    <TelaPrincipal />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



