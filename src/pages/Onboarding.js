import { View, Text } from "react-native";
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
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onLayout={handleOnLayout}
    >
      <View
        style={{
          width: 350,
          height: 350,
          backgroundColor: "red",
          borderRadius: 100,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/Images/onboarding.jpg")}
          //   source={require(`${currentImage}`)}
          style={{
            width: 350,
            height: 350,
            borderRadius: 100,
            resizeMode: "center",
            borderColor: "red",
            borderWidth: 1,
          }}
        />
      </View>
      <Text>Onboarding</Text>
      {/* <Button title="next" onPress={() => navigation.navigate("Location")} /> */}
      <Button title="next" onPress={nextImage} />
    </View>
  );
}
