import React from 'react';
import { SafeAreaView, StyleSheet ,StatusBar} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';

import Home from './src/views/Home';
import LoginForm from './src/views/Login';
import CadastroScreen from './src/views/Cadastro';


const Stack = createStackNavigator();

export default props => (
    // <SafeAreaView style={styles.container}>
    //   <TeladeLogin />
    // </SafeAreaView>

    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginForm}
              options={
                {headerShown:false}
              }
          />
          <Stack.Screen name="Home" component={Home}
            options={
              {headerShown:false}
            }
          />

          <Stack.Screen name="Cadastro" component={CadastroScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>


  )




