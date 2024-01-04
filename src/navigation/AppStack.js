import { View, Text } from "react-native";
import React from "react";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Store from "../pages/Store";
import Location from "../pages/Location";
import Hirefom from "../pages/HireForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../pages/Main";
import ViewItemLayout from "../components/ViewItemLayout";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import Cart from "../pages/Cart";

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Location"
      screenOptions={{ headerShown: false }}
    >
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
        name="ViewItem"
        component={ViewItemLayout}
        options={{
          headerShown: false,
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
        name="payment"
        component={Payment}
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
        name="cart"
        component={Cart}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "whitesmoke",
          },
          headerTitleStyle: {
            color: "#000000",
          },
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="paymentResponse"
        component={PaymentSuccess}
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
        component={Hirefom}
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
  );
}
