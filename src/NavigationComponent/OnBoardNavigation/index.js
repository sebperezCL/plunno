import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoardingScreen1,OnBoardingScreen2,OnBoardingScreen3}  from '../../Screeens/OnBoardingScreens';
const Stack = createStackNavigator();

const OnBoardingNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Onboarding1" component={OnBoardingScreen1} options={{ headerShown: false }}/>
            <Stack.Screen name="Onboarding2" component={OnBoardingScreen2} options={{ headerShown: false }}/>
            <Stack.Screen name="Onboarding3" component={OnBoardingScreen3} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
export default OnBoardingNavigation;


