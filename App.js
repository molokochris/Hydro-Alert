import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Location from "./src/pages/Location";
import Onboarding from "./src/pages/Onboarding";
import HireForm from "./src/pages/HireForm";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hire"
          component={HireForm}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
