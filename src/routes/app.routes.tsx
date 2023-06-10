import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        table: number | string,
        order_id: string
    };
    FinishOrder: {
        number: number | string;
        order_id: string;
    };
}

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>

        </Stack.Navigator>
    )
}

export default AppRoutes