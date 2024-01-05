import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { Children, useState } from "react";
import { Feather } from "@expo/vector-icons";
import InputForm from "../components/InputForm";
import firebase from "firebase/compat/app";
import { getData } from "../DB/SecureStorage";
import { useEffect } from "react";
import { firestore } from "../firebase/firebase";

function Label(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "#018553", fontFamily: "Poppins-Medium" }}>
        {props.children}
      </Text>
    </View>
  );
}

export default function Hirefom({ navigation }) {
  const [firstNames, setFirstNames] = useState(null);
  const [surname, setSurname] = useState(null);
  const [contactNumbers, setContactNumbers] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [addressLineOne, setAddressLineOne] = useState(null);
  const [addressLineTwo, setAddressLineTwo] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [suburbName, setSuburbName] = useState(null);
  const [suburbCode, setSuburbCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const user = firebase.auth().currentUser;
  useEffect(() => {
    async function getUserData() {
      setIsLoading(true);
      let userProfile = await getData("userProfile");
      userProfile = JSON.parse(userProfile);

      setFirstNames(userProfile.firstNames);
      setSurname(userProfile.surname);
      setContactNumbers(userProfile.contactNumbers);
      setEmailAddress(userProfile.emailAddress);

      setIsLoading(false);
    }
    getUserData();
  }, []);

  // Handle submit

  const handleSubmitForm = async () => {
    const allFieldsFilled = [
      firstNames,
      surname,
      contactNumbers,
      emailAddress,
      addressLineOne,
      cityName,
      suburbName,
      suburbCode,
    ].every((field) => field !== null);

    if (allFieldsFilled) {
      try {
        setIsLoading(true);
        await firestore.collection("pendingOrders").doc(user.uid).set({
          firstNames,
          surname,
          contactNumbers,
          emailAddress,
          addressLineOne,
          cityName,
          suburbName,
          suburbCode,
          approved: false,
        });
        navigation.goBack();
        Alert.alert(
          "Form submitted successfully!",
          "Navigate to Orders later to check if your order has been approved.",
          [{ text: "OK" }]
        );
        console.log("Form submitted successfully!");
      } catch (error) {
        console.log(`error submitting form ${error}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert(
        "Incomplete Form",
        "Please complete all fields before submitting.",
        [{ text: "OK" }]
      );
    }
  };

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
          <InputForm
            placeholder="First Names"
            width={"48%"}
            value={firstNames}
            onChangeText={(text) => setFirstNames(text)}
          />
          <InputForm
            placeholder="Surname"
            width={"48%"}
            value={surname}
            onChangeText={(text) => setSurname(text)}
          />
        </View>
        <Label>Contact Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm
            placeholder="Contact Numbers"
            value={contactNumbers}
            onChangeText={(text) => setContactNumbers(text)}
          />
          <InputForm
            placeholder="Email Address"
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>
        <Label>Address Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm
            placeholder="Address Line 1"
            onChangeText={(text) => setAddressLineOne(text)}
          />
          <InputForm
            placeholder="Address Line 2"
            onChangeText={(text) => setAddressLineTwo(text)}
          />
          <InputForm
            placeholder="City"
            onChangeText={(text) => setCityName(text)}
          />
          <InputForm
            placeholder="Suburb"
            onChangeText={(text) => setSuburbName(text)}
          />
          <InputForm
            placeholder="Code"
            width={80}
            onChangeText={(text) => setSuburbCode(text)}
          />
        </View>

        <TouchableOpacity
          style={{
            width: "100",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 8,
            alignSelf: "center",
            backgroundColor: "#018553",
          }}
          onPress={handleSubmitForm}
        >
          <Text style={{ color: "whitesmoke", fontWeight: "500" }}>
            Process
          </Text>
        </TouchableOpacity>
        {/* </View> */}
        {isLoading && (
          <View
            style={{
              // flex: 1,
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
              justifyContent: "center",
              alignItems: "center",
              // top: "50%",
              // left: "50%",
            }}
          >
            <ActivityIndicator size={"large"} color="#018553" />
          </View>
        )}
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
