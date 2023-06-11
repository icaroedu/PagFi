import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CadastroScreen from './src/Views/CadastroScreen';
import TeladeLogin from './src/Views/TeladeLogin';
import ProfileScreen from './src/Views/PerfilAdmin';

export default props => (
    <SafeAreaView style={styles.container}>
     {/* <TeladeLogin /> */}
      {/*<CadastroScreen /> */}
      <ProfileScreen />
    </SafeAreaView>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



