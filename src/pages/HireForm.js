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
import InputForm from "../components/InputForm";

function Label(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "whitesmoke" }}>{props.children}</Text>
    </View>
  );
}

export default function Hirefom() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000", padding: 10 }}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          // backgroundColor="#111111"
          translucent={true}
        />
        <Label>Personal Details</Label>
        <View style={[style.inputBoxContainer, { flexDirection: "row" }]}>
          <InputForm placeholder="First Names" width={"48%"} />
          <InputForm placeholder="Surname" width={"48%"} />
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
            Proceed
          </Text>
        </TouchableOpacity>
        {/* </View> */}
      </ScrollView>
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
});
