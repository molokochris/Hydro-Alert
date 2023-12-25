import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "../firebase/firebase";
import { Alert } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Register({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoaded] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }

  // handle registration

  const handleRegistration = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Please fill in all fields.");
    } else if (confirmPassword !== password) {
      Alert.alert(
        "Password and Confirm Password do not match. Please try again."
      );
    } else {
      setIsLoading(true);
      try {
        // Replace the following line with your registration logic
        const userCredentials = await Auth.createUserWithEmailAndPassword(
          email,
          password
        );

        const userId = userCredentials.user.uid;
        navigation.navigate("UserInfo", { userID: userId, email: email });
        Alert.alert("Registration successful");
      } catch (error) {
        console.error("Registration error: ", error);
        const errorMessage = getFirebaseErrorMessage(error);
        Alert.alert(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Function to get user-friendly error message based on the Firebase error code
  const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please use a different email.";
      case "auth/invalid-email":
        return "Invalid email address. Please enter a valid email.";
      case "auth/weak-password":
        return "Password is too weak. Please choose a stronger password.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password. Please try again.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onLayout={handleOnLayout}
    >
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScrollView style={{ width: "100%" }}>
        <ImageBackground
          source={require("../../assets/Images/onboarding-2.jpg")}
          style={{ flex: 1, width: "100%" }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "column",
              // paddingBottom: 20,
              backgroundColor: "rgba(0,0,0,0.65)",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Black",
                color: "whitesmoke",
                fontSize: 35,
                textAlign: "center",
                // textShadowOffset: 5,
                textShadowColor: "red",
              }}
            >
              Welcome to Hydro Alert.
            </Text>
            {/* <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}
          > */}
            {/* <TouchableOpacity
              style={{
                paddingHorizontal: 4,
                paddingVertical: 10,
                borderColor: "whitesmoke",
                borderWidth: 1,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: "whitesmoke",
              }}
            >
              <Ionicons name="md-logo-google" size={24} color="#000000" />
            </TouchableOpacity> */}
            {/* </View> */}
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            width: "100%",
            // borderWidth: 1,
            borderColor: "whitesmoke",
            borderRadius: 8,
            padding: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 4,
              paddingVertical: 10,
              borderColor: "whitesmoke",
              borderWidth: 1,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              backgroundColor: "whitesmoke",
            }}
          >
            <Ionicons name="md-logo-google" size={24} color="#000000" />
          </TouchableOpacity>
          <Text
            style={{
              marginVertical: 20,
              color: "#222222",
              fontFamily: "Poppins-Medium",
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            OR
          </Text>
          <View
            style={{
              // backgroundColor: "#111111",
              paddingHorizontal: 4,
              paddingVertical: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#222222",
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#222222"
              cursorColor="#222222"
              style={{ color: "whitesmoke" }}
              keyboardType="email-address" // Assuming this is an email input
              onChangeText={(text) => setEmail(text)} // Assuming you have a state variable for email
            />
          </View>
          <View
            style={{
              // backgroundColor: "#111111",
              paddingHorizontal: 4,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#222222",
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#222222"
              cursorColor="#222222"
              style={{ color: "whitesmoke" }}
              secureTextEntry // Assuming this is a password input
              onChangeText={(text) => setPassword(text)} // Assuming you have a state variable for password
            />
          </View>
          <View
            style={{
              // backgroundColor: "#111111",
              paddingHorizontal: 4,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#222222",
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#222222"
              cursorColor="#222222"
              style={{ color: "whitesmoke" }}
              secureTextEntry // Assuming this is a password input
              onChangeText={(text) => setConfirmPassword(text)} // Assuming you have a state variable for confirm password
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#C3AE2E",
              paddingHorizontal: 4,
              paddingVertical: 10,
              marginTop: 20,
              marginBottom: 10,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleRegistration}
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <ActivityIndicator size={30} color="whitesmoke" />
            ) : (
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "whitesmoke",
                  fontSize: 16,
                }}
              >
                Register
              </Text>
            )}
          </TouchableOpacity>
          <View style={{}}>
            {/* <Pressable>
              <Text style={{ color: "tomato", fontFamily: "Poppins-Regular" }}>
                Forgot your password?
              </Text>
            </Pressable> */}
            <View
              style={{
                justifyContent: "center",
                marginTop: 30,
                flexDirection: "row",
              }}
            >
              <Text
                style={{ color: "whitesmoke", fontFamily: "Poppins-Regular" }}
              >
                Have an account,{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#018553" }}> Login</Text>
              </Pressable>
            </View>
          </View>
          {/* <Button title="Home"  /> */}
          {/* <Button
          title="Register"
          }
        /> */}
        </View>
      </ScrollView>
    </View>
  );
}
