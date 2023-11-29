import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Search from "./src/pages/Search";
import Location from "./src/pages/Location"


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Location">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
