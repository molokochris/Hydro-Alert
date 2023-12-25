import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Store from "./Store";
import Community from "./Community";

// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function Main({ route }) {
  // const { bottomBar } = useContext(BottomBarContext);
  const [bottomBar, SetBottomBar] = useState(true);
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  const location = route.params.location;
  const userID = route.params.userID;
  // console.log(route.params.location);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          // backgroundColor: "yellow",

          borderColor: "black",
        },
        tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="md-alert-circle-sharp" size={24} color={color} />
            );
          },
        }}
        initialParams={{ location: location, userID: userID }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="chatbubbles" size={24} color={color} />;
          },
        }}
        initialParams={{ userID: userID }}
      />
    </Tab.Navigator>
  );
}
