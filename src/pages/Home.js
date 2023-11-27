import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#176B87",
      }}
    >
      <StatusBar translucent={false} backgroundColor="#176B87" />
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          paddingHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "whitesmoke",
            width: "100%",
            paddingHorizontal: 6,
            borderRadius: 48,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "50%",
              textAlign: "center",
              backgroundColor: "#176B87",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "whitesmoke" }}>Updates</Text>
          </Pressable>
          <Pressable
            style={{
              width: "50%",
              textAlign: "center",
              //   backgroundColor: "#176B87",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "gray" }}>Truck</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "whitesmoke",
          flex: 9,
          width: "100%",
          alignItems: "center",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          padding: 10,
        }}
      >
        <Text>Helo</Text>
      </View>
    </View>
  );
}
