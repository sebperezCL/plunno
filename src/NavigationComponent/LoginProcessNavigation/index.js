import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
  ChangePassword,
} from "../../Screeens/LoginProcessScreens";
const Stack = createStackNavigator();

const LoginProcessNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginProcessNavigation;
