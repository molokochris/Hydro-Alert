import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { deleteData, getData } from "../DB/SecureStorage";
import { Auth } from "../firebase/firebase";
import { getAuth } from "firebase/auth";

SplashScreen.preventAutoHideAsync();

export default function Location({ navigation, route }) {
  const [search, setSearch] = useState(false);
  const [searchRes, setSearchRes] = useState("");

  const locations = ["Boyne", "Makanye", "Ga-Molepo", "Iraq", "Ga-Mothiba"];
  const searchLocation = (e) => {
    // setSearch(true);
    setSearchRes(e);
    console.log(e);
  };

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
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onLayout={handleOnLayout}
    >
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View
        style={{
          flex: 1,
          width: "100%",
          // justifyContent: "center",
          // alignItems: "center",
          paddingHorizontal: 10,
          backgroundColor: "#000000",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 24,
            marginBottom: 20,
            fontFamily: "Poppins-Black",
            color: "whitesmoke",
            marginTop: 40,
          }}
        >
          Please Pick Your Location:
        </Text>
        <View
          style={{
            backgroundColor: "#111111",
            flexDirection: "row",
            paddingHorizontal: 8,
            paddingVertical: 10,
            marginVertical: 30,
            // width: 300,
            // height: 40,
            alignSelf: "center",
            borderRadius: 6,
          }}
        >
          <TextInput
            placeholder="search"
            placeholderTextColor="gray"
            cursorColor="#C3AE2E"
            style={{
              flex: 1,
              color: "whitesmoke",
              fontFamily: "Poppins-Regular",
            }}
            onFocus={() => setSearch(true)}
            onBlur={() => setSearch(false)}
            onChangeText={(e) => searchLocation(e)}
          />
          {/* <Foundation name="magnifying-glass" size={26} color="whitesmoke" /> */}
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {!search && searchRes == ""
              ? locations.map((area, index) => {
                  return (
                    <CustomTouchBtn
                      key={index}
                      location={area}
                      onPress={() =>
                        navigation.navigate("Main", { location: area })
                      }
                    />
                  );
                })
              : locations
                  .filter((location, index) => {
                    return location == searchRes;
                  })
                  .map((location, index) => {
                    return (
                      <CustomTouchBtn
                        key={index}
                        location={location}
                        onPress={() =>
                          navigation.navigate("Main", {
                            location: location,
                            userID: route.params.userID,
                          })
                        }
                      />
                    );
                  })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

function CustomTouchBtn(props) {
  return (
    <TouchableOpacity
      style={{
        // width: "98%",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#C3AE2E",
        borderRadius: 8,
        // backgroundColor: "#C3AE2E",
        marginBottom: 10,
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: "whitesmoke", fontSize: 18 }}>
        {props.location}
      </Text>
    </TouchableOpacity>
  );
}
