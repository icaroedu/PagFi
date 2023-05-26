import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TeladeLogin from '../components/TeladeLogin'

const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName="TeladeLogin">
    <Stack.Screen name="TeladeLogin" component={TeladeLogin} />
  </Stack.Navigator>
)