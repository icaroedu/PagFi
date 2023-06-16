import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroScreen from './src/Views/CadastroScreen';
import TeladeLogin from './src/Views/TeladeLogin';
import ProfileScreen from './src/Views/PerfilAdmin';
import TelaPrincipal  from './src/Views/TelaPrincipal';
import Devedores  from './src/Views/Devedores';
import CadastrandoDevedor from './src/Views/CadastrandoDevedor';


import { LoginProvider } from './src/Context/LoginContext';
import Authenticator from './src/Context/Auth';


const Stack = createStackNavigator();
const { isLoggedIn,logout } = LoginProvider;

export default props => (
  <NavigationContainer>
    <LoginProvider>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TeladeLogin" component={TeladeLogin} options={{ headerShown: false }}/>
        
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }} />
        <Stack.Screen name="Devedores" component={Devedores} options={{ headerShown: false }} />
        <Stack.Screen name="PerfilAdmin" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastrandoDevedor" component={CadastrandoDevedor} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </SafeAreaView>
    </LoginProvider>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
});



