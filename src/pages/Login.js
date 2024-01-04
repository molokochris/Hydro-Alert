import {
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { saveData } from "../DB/SecureStorage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import * as DevClient from "expo-dev-client";

SplashScreen.preventAutoHideAsync();

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [userID, setUserID] = useState(null);

  const { login } = useContext(AuthContext);

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
  // Handle Login Fuction

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please fill in all fields.");
    } else {
      //
      login(email, password);
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
                fontSize: 50,
                textAlign: "center",
                // textShadowOffset: 5,
                textShadowColor: "red",
              }}
            >
              Welcome Back.
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
              placeholder="Username/Email Address"
              placeholderTextColor="#222222"
              cursorColor="#222222"
              style={{ color: "whitesmoke" }}
              textContentType="emailAddress"
              onChangeText={(text) => setEmail(text)}
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
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
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
            onPress={handleLogin}
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
                Login
              </Text>
            )}
          </TouchableOpacity>
          <View style={{}}>
            <Pressable>
              <Text style={{ color: "tomato", fontFamily: "Poppins-Regular" }}>
                Forgot your password?
              </Text>
            </Pressable>
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
                Don't have an account,{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "#018553" }}> Register</Text>
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
