import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Auth, firestore } from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ScrollView } from "react-native";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WebView from "react-native-webview";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation, route }) {
  const [showOver, setShowOver] = useState(false);
  const [isUpdates, setIsUpdates] = useState(false);
  const [updates, setUpdates] = useState();
  const [isRegister, setIsRegister] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userLocation = route.params.location;

  const handleLogin = async () => {
    try {
      await Auth.signInWithEmailAndPassword(email, password);
      // alert("signed In");
      navigation.navigate("Hire");
    } catch (error) {
      console.log("error: ", error);
    }
    navigation.navigate("Hire");
  };
  const handleRegister = async () => {
    try {
      await Auth.createUserWithEmailAndPassword(email, password);
      console.log(`email: ${email} & pass: ${password}`);
      // alert("Success Registration");
      // navigation.navigate("Hire");
      setIsRegister(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Fetch Data from Database
  useEffect(() => {
    setIsUpdates(false);
    const fetchUpdates = async () => {
      try {
        const updatesRef = firestore.collection(`${userLocation}`);
        // const updatesRef = firestore.collection("Polokwane");
        const snapshot = await updatesRef.get();
        const updatesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUpdates(updatesData);
        setIsUpdates(true);
        console.log(updatesData);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };
    fetchUpdates();
    console.log(userLocation);
  }, []);
  // fonts
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
      onLayout={handleOnLayout}
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#176B87",
        backgroundColor: "#018553",
      }}
    >
      <StatusBar
        translucent={false}
        // backgroundColor="#176B87"
        backgroundColor="#018553"
        barStyle="light-content"
      />
      <View
        style={{
          flex: 1,
          position: "absolute",
          zIndex: 2,
          // backgroundColor: "yellow",
          backgroundColor: "#018553",
          paddingVertical: 20,
          width: "100%",
          // alignSelf: "flex-start",
          top: 65,
          // height: 250,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          paddingHorizontal: 10,
          // left: 10,
          display: showMenu ? "flex" : "none",
        }}
      >
        {isRegister ? (
          <>
            <TextInput
              placeholder="email"
              style={{
                backgroundColor: "whitesmoke",
                marginBottom: 10,
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 16,
              }}
              textContentType="emailAddress"
              // value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="password"
              textContentType="password"
              style={{
                backgroundColor: "whitesmoke",
                marginBottom: 10,
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 16,
              }}
              // value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 16,
                backgroundColor: "#C3AE2E",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleRegister}
            >
              <Text style={{ color: "whitesmoke" }}>Register</Text>
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                flex: 1,
                alignSelf: "center",
                fontSize: 15,
              }}
            >
              Already have an account,{" "}
              <Pressable
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => setIsRegister(false)}
              >
                <Text
                  style={{
                    color: "tomato",
                  }}
                >
                  Sign in
                </Text>
              </Pressable>
            </Text>
          </>
        ) : (
          <>
            <TextInput
              placeholder="email"
              style={{
                backgroundColor: "whitesmoke",
                marginBottom: 10,
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 16,
              }}
            />
            <TextInput
              placeholder="password"
              style={{
                backgroundColor: "whitesmoke",
                marginBottom: 10,
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 16,
              }}
            />
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 16,
                backgroundColor: "#C3AE2E",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleLogin}
            >
              <Text style={{ color: "whitesmoke" }}>Sign in</Text>
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                flex: 1,
                alignSelf: "center",
                fontSize: 15,
              }}
            >
              Don't have an account,{" "}
              <Pressable
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => setIsRegister(true)}
              >
                <Text
                  style={{
                    color: "tomato",
                  }}
                >
                  Register
                </Text>
              </Pressable>
            </Text>
          </>
        )}
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          paddingHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Icon
            name="chevron-down"
            type="ionicon"
            color="whitesmoke"
            size={30}
            onPress={() => setShowMenu(!showMenu)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "whitesmoke",
            width: "100%",
            paddingHorizontal: 6,
            borderRadius: 48,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            elevation: 40,
            shadowColor: "red",
          }}
        >
          <Pressable
            onPress={() => setIsUpdates(true)}
            style={{
              width: "50%",
              textAlign: "center",
              backgroundColor: isUpdates ? "#018553" : "whitesmoke",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: isUpdates ? "whitesmoke" : "#018553",
                fontFamily: "Poppins-Regular",
              }}
            >
              Updates
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setIsUpdates(false)}
            style={{
              width: "50%",
              textAlign: "center",
              backgroundColor: isUpdates ? "whitesmoke" : "#018553",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon
              // name="post"
              name="truck"
              type="fontisto"
              // type=""
              color={isUpdates ? "#018553" : "whitesmoke"}
            />
            {/* <MaterialCommunityIcons
              name="post"
              size={24}
              color="black"
              color={isUpdates ? "#018553" : "whitesmoke"}
            /> */}
            {/* <Text style={{ color: "gray", marginLeft: 4 }}>Truck</Text> */}
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "whitesmoke",
          flex: 9,
          width: "100%",
          alignItems: "center",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingVertical: 10,
          // changes PH for update tabs
          paddingHorizontal: 10,
        }}
      >
        {isUpdates ? (
          <ScrollView
            style={{ borderRadius: 48, flex: 1 }}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
          >
            {/* <Pressable
              onPress={() => setShowOver(!showOver)}
              style={{
                width: "100%",
                height: showOver ? "100%" : 125,
                borderRadius: 35,
                paddingVertical: 10,
                paddingHorizontal: 14,
                backgroundColor: "tomato",
                flexDirection: "column",
                marginBottom: 10,
                elevation: 18,
                shadowColor: "#D9D9D9",
                zIndex: showOver ? 2 : 1,
                position: showOver ? "absolute" : "none",
              }}
            >
              <Text
                style={{
                  color: "whitesmoke",
                  alignSelf: "center",
                  fontFamily: "Poppins-Bold",
                  fontSize: 22,
                  //   height: "10%",
                }}
              >
                Emergency Alert
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  //   backgroundColor: "blue",
                  height: "80%",
                }}
              >
                <View style={{ width: "80%", padding: 4 }}>
                  <Text
                    style={{
                      height: "100%",
                      color: "whitesmoke",
                      paddingVertical: 8,
                    }}
                  >
                    Minim ea aliqua aute eiusmod voluptate adipisicing in mollit
                    excepteur cupidatat ipsum tempor. Fugiat est dolor elit
                    laboris ullamco irure sunt commodo ut duis nostrud enim.
                  </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: 30,
                    backgroundColor: "whitesmoke",
                    borderRadius: 18,
                    paddingVertical: 4,
                    paddingHorizontal: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontFamily: "Poppins-Regular" }}>15 : 00</Text>
                </View>
              </View>
            </Pressable> */}
            {updates
              .filter((update) => {
                return update.notificationType === "emergency";
              })
              .map((update) => {
                return (
                  <Pressable
                    onPress={() => setShowOver(!showOver)}
                    style={{
                      width: "100%",
                      height: showOver ? "100%" : 125,
                      borderRadius: 20,
                      paddingVertical: 10,
                      paddingHorizontal: 14,
                      backgroundColor: "#D02626",
                      flexDirection: "column",
                      marginBottom: 10,
                      elevation: 18,
                      shadowColor: "#D9D9D9",
                      zIndex: showOver ? 2 : 1,
                      position: showOver ? "absolute" : "none",
                    }}
                  >
                    <Text
                      style={{
                        color: "whitesmoke",
                        alignSelf: "center",
                        fontFamily: "Poppins-Bold",
                        fontSize: 22,
                        //   height: "10%",
                      }}
                    >
                      Emergency Alert
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        //   backgroundColor: "blue",
                        height: "80%",
                      }}
                    >
                      <View style={{ width: "80%", padding: 4 }}>
                        <Text
                          style={{
                            height: "100%",
                            color: "whitesmoke",
                            paddingVertical: 8,
                          }}
                        >
                          {/* Minim ea aliqua aute eiusmod voluptate adipisicing in
                          mollit excepteur cupidatat ipsum tempor. Fugiat est
                          dolor elit laboris ullamco irure sunt commodo ut duis
                          nostrud enim. */}
                          {update.message}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "20%",
                          height: 30,
                          backgroundColor: "whitesmoke",
                          borderRadius: 18,
                          paddingVertical: 4,
                          paddingHorizontal: 2,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontFamily: "Poppins-Regular" }}>
                          {/* 15 : 00 */}
                          {update.time}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            {/* <View
              //   onPress={() => console.log("Pressed!!")}
              style={{
                width: "100%",
                height: 125,
                borderRadius: 35,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: "#D9D9D9",
                flexDirection: "column",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  alignSelf: "flex-start",
                  fontFamily: "Poppins-Regular",
                  fontSize: 22,
                  //   height: "10%",
                }}
              >
                Ga-Makanye
              </Text>
              <View
                style={{
                  flex: 1,
                  //   backgroundColor: "red",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    color: "gray",
                    width: "80%",
                  }}
                >
                  Tue, 12 Nov 2023
                </Text>
                <View
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    backgroundColor: "gray",
                    borderRadius: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 15,
                    }}
                  >
                    15:00
                  </Text>
                </View>
              </View>
            </View> */}
            {updates
              .filter((update) => {
                return update.notificationType === "normal";
              })
              .map((update) => {
                return (
                  <View
                    //   onPress={() => console.log("Pressed!!")}
                    style={{
                      width: "100%",
                      // height: 125,
                      // height: 100,
                      borderRadius: 20,
                      // paddingVertical: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      backgroundColor: "white",
                      // backgroundColor: "rgba(23, 107, 135, 0.32)",
                      flexDirection: "row",
                      elevation: 50,
                      shadowColor: "#D9D9D9",
                      marginBottom: 10,
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        padding: 20,
                        // backgroundColor: "red",
                        borderWidth: 0.5,
                        borderColor: "gray",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                      }}
                    >
                      <Image
                        source={require("../../assets/Images/truck.png")}
                        style={{
                          borderRadius: 100,
                          width: 20,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "60%",
                        padding: 10,
                        // backgroundColor: "yellow",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "Poppins-Medium",
                          marginLeft: 10,
                        }}
                      >
                        {update.location}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins-Regular",
                          color: "gray",
                          marginLeft: 10,
                        }}
                      >
                        {update.time}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "30%",
                        // height: 50,
                        padding: 5,
                        backgroundColor: "#C3AE2E",
                        borderRadius: 8,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "whitesmoke",
                        }}
                      >
                        {update.dayOfWeek}
                      </Text>
                    </View>
                  </View>
                );
              })}
            {/* <View
              //   onPress={() => console.log("Pressed!!")}
              style={{
                width: "100%",
                height: 125,
                borderRadius: 35,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: "white",
                flexDirection: "column",
                elevation: 18,
                shadowColor: "#D9D9D9",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  alignSelf: "flex-start",
                  fontFamily: "Poppins-Regular",
                  fontSize: 22,
                  //   height: "10%",
                }}
              >
                Ga-Makanye
              </Text>
              <View
                style={{
                  flex: 1,
                  //   backgroundColor: "red",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    color: "gray",
                    width: "80%",
                  }}
                >
                  Tue, 12 Nov 2023
                </Text>
                <View
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    backgroundColor: "#176B87",
                    borderRadius: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 15,
                      color: "whitesmoke",
                    }}
                  >
                    15:00
                  </Text>
                </View>
              </View>
            </View> */}
            {/* <View
              //   onPress={() => console.log("Pressed!!")}
              style={{
                width: "100%",
                height: 125,
                borderRadius: 35,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: "white",
                flexDirection: "column",
                elevation: 18,
                shadowColor: "#D9D9D9",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  alignSelf: "flex-start",
                  fontFamily: "Poppins-Regular",
                  fontSize: 22,
                  //   height: "10%",
                }}
              >
                Ga-Makanye
              </Text>
              <View
                style={{
                  flex: 1,
                  //   backgroundColor: "red",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    color: "gray",
                    width: "80%",
                  }}
                >
                  Tue, 12 Nov 2023
                </Text>
                <View
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    backgroundColor: "#176B87",
                    borderRadius: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 15,
                      color: "whitesmoke",
                    }}
                  >
                    15:00
                  </Text>
                </View>
              </View>
            </View> */}
            {/* <View
              //   onPress={() => console.log("Pressed!!")}
              style={{
                width: "100%",
                height: 125,
                borderRadius: 35,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: "white",
                flexDirection: "column",
                elevation: 18,
                shadowColor: "#D9D9D9",
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  alignSelf: "flex-start",
                  fontFamily: "Poppins-Regular",
                  fontSize: 22,
                  //   height: "10%",
                }}
              >
                Ga-Makanye
              </Text>
              <View
                style={{
                  flex: 1,
                  //   backgroundColor: "red",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    color: "gray",
                    width: "80%",
                  }}
                >
                  Tue, 12 Nov 2023
                </Text>
                <View
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    backgroundColor: "#176B87",
                    borderRadius: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 15,
                      color: "whitesmoke",
                    }}
                  >
                    15:00
                  </Text>
                </View>
              </View>
            </View> */}
          </ScrollView>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* <ActivityIndicator size="large" color="#176B87" /> */}
            {/* <Text>Fetching Data</Text> */}
            <WebView
              source={{ uri: "https://www.facebook.com/WaterAndSanitationRSA" }}
              style={{ flex: 1 }}
            />
          </View>
        )}
      </View>
    </View>
  );
}
