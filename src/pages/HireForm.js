// import { View, Text } from "react-native";
// import React from "react";

// export default function HireForm() {
//   return (
//     <View>
//       <Text>HireForm</Text>
//     </View>
//   );
// }
import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { firestore } from "../firebase";
import { Text } from "react-native";

export default function HireForm() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitOrder = async () => {
    try {
      await firestore.collection("Request").set({
        fullName,
        address,
        phoneNumber,
        message,
      });
      console.log("Order Submitted:", {
        fullName,
        address,
        phoneNumber,
        message,
      });
      alert("success");
    } catch (error) {
      console.log("error: ", error);
    }
    // Add your logic for handling the order data
  };
  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View style={{ alignSelf: "center", paddingVertical: 20 }}>
        <Text style={{ fontSize: 18 }}>Send Request To Hire Truck</Text>
      </View>
      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Message (Optional)"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
        numberOfLines={3}
        style={{ marginBottom: 16 }}
      />
      <Button
        mode="contained"
        onPress={submitOrder}
        style={{ marginTop: 16, backgroundColor: "#018553" }}
      >
        Submit Order
      </Button>
    </View>
  );
}
