import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { firestore } from "../firebase/firebase";
import firebase from "firebase/compat/app";
import ItemStatus from "../components/ItemStatus";
import LiveOrders from "../components/LiveOrders";
import OrderHistory from "../components/OrderHistory";

export default function Orders({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ height: 150 }}>
        <LinearGradient
          colors={["#093F94", "black"]}
          style={{
            flex: 1,
            padding: 10,
            // backgroundColor: "rgba(104,104,104,0.6)",
          }}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            // backgroundColor="#111111"
            translucent={true}
          />
          <View
            style={{
              flex: 1,
              paddingTop: 30,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Pressable
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
                // borderWidth: 1,
                // borderColor: "whitesmoke",
                // backgroundColor: "whitesmoke",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={35}
                color="whitesmoke"
              />
            </Pressable>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
                // borderWidth: 1,
                // borderColor: "whitesmoke",
                // backgroundColor: "whitesmoke",
              }}
            ></View>
          </View>
        </LinearGradient>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#000000",
          },
          tabBarActiveTintColor: "whitesmoke",
          tabBarIndicatorStyle: {
            borderBottomColor: "#093F94",
            borderWidth: 1,
          },
        }}
      >
        <Tab.Screen name="Orders P/A" component={LiveOrders} />
        <Tab.Screen name="History" component={OrderHistory} />
      </Tab.Navigator>
    </View>
  );
}
