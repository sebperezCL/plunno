import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardNavigation from "../OnBoardNavigation";
import LoginProcessNavigation from "../LoginProcessNavigation";
import { LoginScreen } from "../../Screeens/LoginProcessScreens";
const Stack = createStackNavigator();

const NavigationWrapper = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Onboarding" component={OnBoardNavigation} options={{ headerShown: false }}/> */}
                <Stack.Screen name="LoginProcess" component={LoginProcessNavigation} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationWrapper; 



