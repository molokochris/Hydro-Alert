import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { addItem, removeItem } from "../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "../firebase/firebase";
import { useState } from "react";

export default function Store({ navigation }) {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const CartItemsList = useSelector((state) => state);
  let itemsLength = CartItemsList?.length || 0;
  const dispatch = useDispatch();

  const addToCart = ({ name, price, size, id }) => {
    const cartItem = {
      id,
      name: name,
      store: "",
      // price: parseFloat(price),
      price,
      // size: parseInt(size),
      capacity: 0,
    };

    dispatch(addItem(cartItem));
    Alert.alert(`added ${name} to cart`);
    // navigation.goBack();
  };

  useEffect(() => {
    setIsLoading(true);

    firestore
      .collection("tanks")
      .get()
      .then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          const tankData = doc.data();
          tankData.id = Date.now();
          items.push(tankData);
          // console.log(Object.keys(tankData));
        });
        setProducts(items);
        // console.log(items);
      })
      .catch((err) => {
        console.error("Error fetching tanks:", err); // Use console.error for errors
        // Handle the error appropriately, e.g., display an error message
        // setProducts([]); // Clear the products in case of error
      })
      .finally(() => {
        setIsLoading(false);
      });
    // products = items;
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
          {isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size={"large"} color={"whitesmoke"} />
            </View>
          ) : products ? (
            products.map((item, id) => {
              return (
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
                  key={id}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                      borderTopLeftRadius: 8,
                      borderTopEndRadius: 8,
                      padding: 4,
                    }}
                    resizeMode="center"
                  />
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
                        {item.name}
                      </Text>
                      {/* <Text style={{ color: "whitesmoke", marginBottom: 10 }}>
                          5000l
                        </Text> */}
                      <Text style={{ color: "whitesmoke" }}>
                        R {item.price}
                      </Text>
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
                      onPress={() => addToCart(item)}
                    >
                      <Ionicons name="add" color="black" size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          ) : (
            <Text>No products</Text>
          )}
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
          {products === undefined ? (
            <Text>Loading products...</Text>
          ) : (
            <Text style={{ color: "whitesmoke" }}>
              Added {itemsLength} item(s):
            </Text>
          )}
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
