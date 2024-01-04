import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../pages/Onboarding";
import Register from "../pages/Register";
import ProfileInfo from "../pages/ProfileInfo";
import Login from "../pages/Login";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Onboarding} />
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{
        //   headerShown: true,
        //   headerStyle: {
        //     backgroundColor: "#000000",
        //   },
        //   headerTitleStyle: {
        //     color: "whitesmoke",
        //   },
        //   title: "",
        //   headerTitleAlign: "center",
        // }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UserInfo" component={ProfileInfo} />
    </Stack.Navigator>
  );
}
