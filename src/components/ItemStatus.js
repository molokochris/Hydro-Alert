import { View, Text } from "react-native";
import React from "react";

export default function ItemStatus(props) {
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
