import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { Children, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { firestore } from "../firebase/firebase";
import InputForm from "../components/InputForm";

function Label(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "whitesmoke" }}>{props.children}</Text>
    </View>
  );
}

export default function ProfileInfo({ navigation, route }) {
  const [firstNames, setFirstNames] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumbers, setContactNumbers] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   handle user info

  const handleProfileInfo = async () => {
    try {
      // Assuming you have state variables for the user profile
      const userProfileData = {
        firstNames,
        surname,
        username,
        contactNumbers,
        emailAddress,
      };

      // Get the current user ID (assuming it's stored in state)
      // const userId = getUserId(); // Implement this function to get the user ID
      const userID = route.params.userID;

      // Set loading state to true
      setIsLoading(true);

      // Save the user profile data to the "users" collection with the user ID as the document name
      await firestore.collection("users").doc(userID).set(userProfileData);

      Alert.alert("Profile information saved successfully");
      navigation.navigate("Location", { userID: userID });
    } catch (error) {
      console.error("Profile information error: ", error);
      Alert.alert("Failed to save profile information. Please try again.");
    } finally {
      // Set loading state to false in the finally block to ensure it's executed regardless of success or error
      setIsLoading(false);
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={{ flex: 1, padding: 10 }}>
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
          <InputForm
            placeholder="First Names"
            width={"48%"}
            onChangeText={(text) => setFirstNames(text)}
            value={firstNames}
          />
          <InputForm
            placeholder="Surname"
            width={"48%"}
            onChangeText={(text) => setSurname(text)}
            value={surname}
          />
        </View>
        <View style={style.inputBoxContainer}>
          <InputForm
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <Label>Contact Details</Label>
        <View style={style.inputBoxContainer}>
          <InputForm
            placeholder="Contact Numbers"
            onChangeText={(text) => setContactNumbers(text)}
            value={contactNumbers}
          />
          {/* <InputForm
            placeholder="Email Address"
            onChangeText={(text) => setEmailAddress(text)}
          /> */}
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 8,
            alignSelf: "center",
            backgroundColor: "#59ADFF",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleProfileInfo}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <ActivityIndicator size={30} color="whitesmoke" />
          ) : (
            <Text style={{ color: "whitesmoke", fontWeight: "500" }}>Save</Text>
          )}
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
