import { View, Text, StatusBar, Pressable } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/reducers";
import { ScrollView } from "react-native";
import calculateFontSize from "../components/AdjustFont";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cart() {
  const CartItemsList = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(CartItemsList);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        // backgroundColor="#111111"
        translucent={true}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 8,
              borderRadius: 18,
              flexDirection: "row",
              marginBottom: 10,
              elevation: 10,
              shadowColor: "#A9A4B6",
              width: "96%",
            }}
          >
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: "#A9A4B6",
                borderRadius: 18,
              }}
            ></View>
            <View style={{ flex: 1, paddingLeft: 30 }}>
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    fontSize: calculateFontSize(18),
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  Jojo Tank
                </Text>
                <Text
                  style={{
                    fontSize: calculateFontSize(16),
                    fontFamily: "Poppins-Regular",
                    color: "#A9A4B6",
                  }}
                >
                  5000l
                </Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: calculateFontSize(18),
                    color: "#C3AE2E",
                    fontFamily: "Poppins-Bold",
                    flex: 1,
                    // backgroundColor: "red",
                  }}
                >
                  R 4 898.90
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingEnd: 10,
                    // backgroundColor: "red",
                  }}
                >
                  <Foundation
                    name="clipboard-notes"
                    size={calculateFontSize(18)}
                    color="#A9A4B6"
                    style={{
                      alignSelf: "center",
                      fontFamily: "Poppins-Medium",
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 4,
                      fontSize: calculateFontSize(15),
                      color: "#A9A4B6",
                      fontFamily: "Poppins-Medium",
                    }}
                  >
                    Qty:
                  </Text>
                  <Text
                    style={{
                      fontSize: calculateFontSize(15),
                      fontFamily: "Poppins-Medium",
                      color: "#A9A4B6",
                    }}
                  >
                    1
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          // padding: 10,
          // backgroundColor: "red",
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#C3AE2E",
            padding: 12,
            width: 125,
            borderTopStartRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => console.log("first")}
        >
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: calculateFontSize(14),
              color: "whitesmoke",
            }}
          >
            CHECKOUT
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
