import { View, Text, TextInput } from "react-native";
import React, { useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";

export default function InputForm(props) {
  return (
    <View
      style={[
        style.inputFieldContainer,
        { width: props.width, marginBottom: 5 },
        props.style,
      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#686868"
        cursorColor="whitesmoke"
        style={style.text}
        onChangeText={props.onChangeText}
        keyboardType={
          props.placeholder === "Email Address"
            ? "email-address"
            : props.placeholder === "Contact Numbers"
            ? "phone-pad"
            : "default"
        }
      />
    </View>
  );
}
const style = StyleSheet.create({
  inputFieldContainer: {
    backgroundColor: "#111111",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: "center",
    height: 50,
  },
  inputBoxContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputField: {
    marginBottom: 5,
  },
  text: {
    color: "whitesmoke",
    // fontFamily: "Poppins-Regular",
  },
});
