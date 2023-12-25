import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Children } from "react";
import { Feather } from "@expo/vector-icons";

function InputForm(props) {
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
      />
    </View>
  );
}

function Label(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "whitesmoke" }}>{props.children}</Text>
    </View>
  );
}

export default function Profile() {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#000000", padding: 10 }}>
        <StatusBar
          barStyle="light-content"
          // backgroundColor="#111111"
          translucent={true}
        />
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: "whitesmoke",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 25,
          }}
        >
          <Feather name="image" color="#686868" size={30} />
        </View>
        <Label>Personal Details</Label>
        <View style={[style.inputBoxContainer, { flexDirection: "row" }]}>
          <InputForm placeholder="First Names" width={"48%"} />
          <InputForm placeholder="Surname" width={"48%"} />
        </View>
        <View style={style.inputBoxContainer}>
          <InputForm placeholder="Username" />
        </View>
        <Label>Contact Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm placeholder="Contact Numbers" />
          <InputForm placeholder="Email Address" />
        </View>
        <Label>Address Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm placeholder="Address Line 1" />
          <InputForm placeholder="Address Line 2" />
          <InputForm placeholder="Suburb" />
          <InputForm placeholder="City" />
          <InputForm placeholder="Code" width={80} />
        </View>
        <Label>Account Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm placeholder="Card Holder" />
          <InputForm placeholder="Bank Name" />
          <InputForm placeholder="Card Number" />
        </View>
        <Label>Change Password Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm placeholder="Old Password" />
          <InputForm placeholder="New Password" />
          <InputForm placeholder="Confirm Password" />
        </View>

        <TouchableOpacity
          style={{
            width: "100",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 8,
            alignSelf: "center",
            backgroundColor: "#59ADFF",
          }}
        >
          <Text style={{ color: "whitesmoke", fontWeight: "500" }}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
});
