import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { firestore } from "../firebase/firebase";
import firebase from "firebase/compat/app";

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

function LiveOrders({ navigation }) {
  const [userOrders, setUserOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = firebase.auth().currentUser;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const userOrders = await firestore
          .collection("pendingOrders")
          .doc(user.uid)
          .get();
        setUserOrders(userOrders.data());
        console.log(userOrders.data());
      } catch (error) {
        console.log(`something went wrong fetchiing data ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);
  return (
    <View style={style.container}>
      {userOrders.approved == false ? (
        <ItemStatus orderInfo={userOrders} />
      ) : userOrders.approved == true ? (
        <ItemStatus status={"success"} />
      ) : (
        <ItemStatus status={"fail"} />
      )}
    </View>
  );
}
function OrderHistory({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Item name={"Water Delivery"} date={"10 Feb 2023"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Jan 2022"} />
        <Item name={"Water Delivery"} date={"23 Oct 2021"} />
        <Item name={"Water Delivery"} date={"08 March 2021"} />
        <Item name={"Water Delivery"} date={"10 Jan 2021"} />
        <Item name={"Water Delivery"} date={"03 Nov 2020"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
      </ScrollView>
    </View>
  );
}

function ItemStatus(props) {
  return props.status == "success" ? (
    <View
      style={{
        height: 65,
        borderWidth: 1,
        borderColor: "#222222",
        borderRadius: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        // elevation: 8,
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "whitesmoke", fontFamily: "Poppins-Medium" }}>
          5000L JOJO Tank
        </Text>
      </View>
      <View
        style={{
          // alignSelf: "flex-end",
          backgroundColor: "rgba(30,196,24,0.2)",
          paddingHorizontal: 4,
          paddingVertical: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          maxHeight: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "rgba(30,196,24,1)",
          }}
        >
          Approved
        </Text>
      </View>
    </View>
  ) : props.status == "fail" ? (
    <View
      style={{
        height: 65,
        borderWidth: 1,
        borderColor: "#222222",
        borderRadius: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        // elevation: 8,
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "whitesmoke", fontFamily: "Poppins-Medium" }}>
          Water Delivery
        </Text>
      </View>
      <View
        style={{
          // alignSelf: "flex-end",
          backgroundColor: "rgba(227,2,2,0.2)",
          paddingHorizontal: 4,
          paddingVertical: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          maxHeight: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "rgba(227,2,2,1)",
          }}
        >
          Failed
        </Text>
      </View>
    </View>
  ) : (
    <View
      style={{
        height: 65,
        borderWidth: 1,
        borderColor: "#222222",
        borderRadius: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        // elevation: 8,
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "whitesmoke", fontFamily: "Poppins-Regular" }}>
          {props.storeOrder ? "Jojo Tank" : "Water Delivery"}
        </Text>
      </View>
      <View
        style={{
          // alignSelf: "flex-end",
          backgroundColor: "rgba(144,196,28,0.2)",
          paddingHorizontal: 4,
          paddingVertical: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          maxHeight: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "rgba(144,196,28,1)",
          }}
        >
          Pending
        </Text>
      </View>
    </View>
  );
}
function Item(props) {
  return (
    <View
      style={{
        height: 65,
        borderWidth: 1,
        borderColor: "#222222",
        borderRadius: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        // elevation: 8,
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "whitesmoke", fontFamily: "Poppins-Medium" }}>
          {props.name}
        </Text>
        <Text style={{ color: "gray", fontFamily: "Poppins-Medium" }}>
          {props.date}
        </Text>
      </View>
      <View
        style={{
          // alignSelf: "flex-end",
          backgroundColor: "rgba(30,196,24,0.2)",
          paddingHorizontal: 4,
          paddingVertical: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          maxHeight: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "rgba(30,196,24,1)",
          }}
        >
          Delivered
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    flex: 1,
    padding: 10,
  },
});
