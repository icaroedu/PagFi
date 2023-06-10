import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../views/Cadastro";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}
            options={
                {headerShown:false}
            }
            
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes