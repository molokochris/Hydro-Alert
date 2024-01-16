import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { addItem, removeItem } from "../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "../firebase/firebase";

export default function Store({ navigation }) {
  const CartItemsList = useSelector((state) => state);
  let itemsLength = CartItemsList.length;

  const dispatch = useDispatch();

  const addToCart = (name, price, size) => {
    const cartItem = {
      id: Date.now().toString(),
      name: name,
      store: "",
      price: parseFloat(price),
      size: parseInt(size),
    };

    dispatch(addItem(cartItem));
    Alert.alert("added item to cart");
    // navigation.goBack();
  };

  useEffect(() => {
    firestore
      .collection("tanks")
      .get()
      .then((querySnapshot) => {
        // Access individual documents using querySnapshot.docs
        querySnapshot.docs.forEach((doc) => {
          const tankData = doc.data();
          console.log(tankData);
          // Utilize tankData as needed
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#000000",
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 6,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "48%",
              height: 200,
              marginBottom: 10,
              backgroundColor: "#111111",
              borderRadius: 8,
              elevation: 20,
              shadowOffset: 20,
              shadowColor: "gray",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderTopLeftRadius: 8,
                borderTopEndRadius: 8,
                padding: 4,
              }}
            ></View>
            <View
              style={{
                flex: 1,
                backgroundColor: "",
                flexDirection: "row",
                padding: 4,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  flex: 1,
                }}
              >
                <Text style={{ color: "whitesmoke", marginBottom: 10 }}>
                  Jojo Tank
                </Text>
                <Text style={{ color: "whitesmoke", marginBottom: 10 }}>
                  5000l
                </Text>
                <Text style={{ color: "whitesmoke" }}>R 4 898.90</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  alignSelf: "flex-end",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => addToCart("Jojo tank", 4898.9, 5000)}
              >
                <Ionicons name="add" color="black" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          padding: 10,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "whitesmoke" }}>
            Added {itemsLength} item(s):
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#C3AE2E",
            padding: 10,
            borderRadius: 4,
            flex: 1,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("cart")}
        >
          <Text style={{ color: "whitesmoke" }}>Proceed to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
