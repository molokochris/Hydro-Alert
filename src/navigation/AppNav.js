import { View, Text } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native";
import AppStack from "./AppStack";
import { Provider } from "react-redux";
import store from "../store/store";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <ActivityIndicator size={"large"} color="#C3AE2E" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}
