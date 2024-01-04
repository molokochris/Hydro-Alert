import { View, Text, StatusBar, Pressable, Alert } from "react-native";
import React from "react";
import { addItem, removeItem } from "../store/reducers";
import { useSelector, useDispatch } from "react-redux";

export default function ViewItemLayout({ navigation, route }) {
  const { name, size, price } = route.params;

  const dispatch = useDispatch();

  const addToCart = () => {
    const cartItem = {
      id: Date.now().toString(),
      name: name,
      store: "",
      price: parseFloat(price),
      size: parseInt(size),
    };

    dispatch(addItem(cartItem));
    Alert.alert("added item to cart");
    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111111",
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // backgroundColor="#111111"
        translucent={true}
      />
      <Text>{name}</Text>
      <Text>{size}</Text>
      <Text>{price}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "green",
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 4,
          }}
          onPress={addToCart}
        >
          <Text style={{ color: "whitesmoke" }}>Add to Cart</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "lightgreen",
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 4,
          }}
          onPress={() => navigation.navigate("payment")}
        >
          <Text style={{ color: "whitesmoke" }}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}
