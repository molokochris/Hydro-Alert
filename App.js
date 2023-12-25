import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/pages/Onboarding";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import Main from "./src/pages/Main";
import Store from "./src/pages/Store";
import Profile from "./src/pages/Profile";
import HireForm from "./src/pages/HireForm";
import Settings from "./src/pages/Settings";
import Orders from "./src/pages/Orders";
import Location from "./src/pages/Location";
import { createContext, useContext, useState } from "react";
import ProfileInfo from "./src/pages/ProfileInfo";

const BottomBarContext = createContext({
  state: true,
  setState: () => {},
});

export default function App() {
  const Stack = createNativeStackNavigator();
  const [bottomBar, SetBottomBar] = useState(true);

  const SetBottomBarVal = (value) => SetBottomBar(value);
  const BottomBarContextVal = {
    bottomBar,
    SetBottomBarVal,
  };

  return (
    <NavigationContainer>
      <BottomBarContext.Provider value={BottomBarContextVal}>
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
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen
            name="Main"
            component={Main}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#111111",
              },
              headerTitleStyle: {
                color: "whitesmoke",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="User Profile"
            component={Profile}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#111111",
              },
              headerTitleStyle: {
                color: "whitesmoke",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Hire"
            component={HireForm}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#111111",
              },
              headerTitleStyle: {
                color: "whitesmoke",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
      </BottomBarContext.Provider>
    </NavigationContainer>
  );
}
