import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroScreen from './src/Views/CadastroScreen';
import TeladeLogin from './src/Views/TeladeLogin';
import ProfileScreen from './src/Views/PerfilAdmin';
import TelaPrincipal  from './src/Views/TelaPrincipal';
import { Devedores } from './src/Views/Devedores.js';

import { LoginProvider } from './src/Context/LoginContext';
import Authenticator from './src/Context/Auth';


const Stack = createStackNavigator();
const { isLoggedIn,logout } = LoginProvider;

export default props => (
  <NavigationContainer>
    <LoginProvider>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="TeladeLogin" component={TeladeLogin} />
        
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Devedores" component={Devedores} />
        <Stack.Screen name="PerfilAdmin" component={ProfileScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      </Stack.Navigator>
    </SafeAreaView>
    </LoginProvider>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



