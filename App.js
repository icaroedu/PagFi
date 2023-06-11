import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CadastroScreen from './src/views/CadastroScreen';
import TeladeLogin from './src/components/TeladeLogin';

export default props => (
    <SafeAreaView style={styles.container}>
      <TeladeLogin />
      <CadastroScreen />
    </SafeAreaView>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



