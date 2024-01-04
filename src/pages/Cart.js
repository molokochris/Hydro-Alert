import { View, Text } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/reducers";
import { ScrollView } from "react-native";

export default function Cart() {
  const CartItemsList = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(CartItemsList);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ borderBottomColor: "#000000", borderBottomWidth: 1 }}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#000000",
                padding: 10,
                marginRight: 20,
              }}
            ></View>
            <Text>Jojo Tank</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                // justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000000",
                  marginRight: 20,
                  padding: 10,
                }}
              ></View>
              <View
                style={{ borderWidth: 1, borderColor: "#000000", padding: 10 }}
              ></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text>20432</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
