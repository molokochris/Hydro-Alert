import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Button } from "@rneui/base";
import { Image } from "react-native";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function Onboarding({ navigation }) {
  const images = [
    "../../assets/Images/onboarding.jpg",
    "../../assets/Images/onboarding-1.jpg",
    "../../assets/Images/onboarding-2.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(
    "../../assets/Images/onboarding.jpg"
  );
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
  let i = 0;
  const nextImage = () => {
    i++;
    setCurrentImage(images[i]);
    console.log(images[i]);
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onLayout={handleOnLayout}
      source={require("../../assets/Images/onboarding.jpg")}
    >
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 3,
            //   width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "whitesmoke",
              fontSize: 20,
              textAlign: "center",
              marginBottom: 20,
              fontFamily: "Poppins-Regular",
            }}
          >
            Stay Informed and Connected with{" "}
            <Text
              style={{
                color: "#C3AE2E",
                // fontWeight: "bold",
                fontSize: 24,
                fontFamily: "Poppins-Bold",
              }}
            >
              Hydro Alert
            </Text>
          </Text>
          <Text
            style={{
              color: "whitesmoke",
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Poppins-Regular",
            }}
          >
            Never miss a water delivery again!
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Button title="next" onPress={() => navigation.navigate("Location")} /> */}
          <Pressable
            title="next"
            // onPress={nextImage}
            style={{
              backgroundColor: "#018553",
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate("Location")}
          >
            <Text style={{ color: "whitesmoke" }}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
