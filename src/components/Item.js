import { View, Text } from "react-native";
import React from "react";

export default function Item(props) {
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
