import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CadastroScreen from './src/Views/CadastroScreen';
import TeladeLogin from './src/Views/TeladeLogin';
import ProfileScreen from './src/Views/PerfilAdmin';
import { TelaPrincipal } from './src/Views/TelaPrincipal';
import { Devedores } from './src/Views/Devedores'
export default props => (
    <SafeAreaView style={styles.container}>
     <Devedores />
    </SafeAreaView>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



