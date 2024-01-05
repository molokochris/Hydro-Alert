import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/";
import { firestore } from "../firebase/firebase";
import { getData } from "../DB/SecureStorage";
import ItemStatus from "./ItemStatus";

export default function LiveOrders({ navigation }) {
  const [userOrders, setUserOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        let user = await getData("userInfo");
        user = JSON.parse(user);
        user = user.user;

        if (user) {
          const fetchedOrders = await firestore
            .collection("pendingOrders")
            .doc(user.uid)
            .get();
          // fetchedOrders = fetchedOrders.data();
          setUserOrders(fetchedOrders.data());
          console.log(fetchedOrders.data());
        }
        console.log(user.uid);
      } catch (error) {
        console.log(`something went wrong fetching data ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  //   console.log(userOrders);

  return (
    <View style={style.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color="#093F94" />
      ) : userOrders ? (
        userOrders.approved == false ? (
          <ItemStatus />
        ) : userOrders.approved == true ? (
          <ItemStatus status={"success"} />
        ) : (
          <ItemStatus status={"fail"} />
        )
      ) : (
        <Text style={{ color: "whitesmoke" }}>No Orders Found!</Text>
      )}
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
