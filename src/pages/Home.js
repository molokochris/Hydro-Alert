import { View, Text, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { firestore } from "../firebase";
import { ScrollView } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [showOver, setShowOver] = useState(false);
  const [isUpdates, setIsUpdates] = useState(false);
  const [updates, setUpdates] = useState();

  // Fetch Data from Database
  useEffect(() => {
    setIsUpdates(false);
    const fetchUpdates = async () => {
      try {
        const updatesRef = firestore.collection("Polokwane");
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
        backgroundColor: "#176B87",
      }}
    >
      <StatusBar translucent={false} backgroundColor="#176B87" />
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          paddingHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "whitesmoke",
            width: "100%",
            paddingHorizontal: 6,
            borderRadius: 48,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => setIsUpdates(true)}
            style={{
              width: "50%",
              textAlign: "center",
              backgroundColor: isUpdates ? "#176B87" : "whitesmoke",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: isUpdates ? "whitesmoke" : "#176B87",
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
              backgroundColor: isUpdates ? "whitesmoke" : "#176B87",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon
              name="truck"
              type="fontisto"
              color={isUpdates ? "#176B87" : "whitesmoke"}
            />
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
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingVertical: 10,
          // changes PH for update tabs
          paddingHorizontal: 10,
        }}
      >
        {isUpdates ? (
          <ScrollView
            style={{ borderRadius: 48 }}
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
                      height: 125,
                      borderRadius: 35,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      backgroundColor: "white",
                      // backgroundColor: "rgba(23, 107, 135, 0.32)",
                      flexDirection: "column",
                      elevation: 18,
                      shadowColor: "#D9D9D9",
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#808080",
                        // color: "white",
                        alignSelf: "flex-start",
                        fontFamily: "Poppins-Regular",
                        // fontWeight: "bold",
                        fontSize: 22,
                        //   height: "10%",
                      }}
                    >
                      {/* Ga-Makanye */}
                      {update.location}
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
                        {/* Tue, 12 Nov 2023 */}
                        {update.dayOfWeek}
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
                          {/* 15:00 */}
                          {update.time}
                        </Text>
                      </View>
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
            <ActivityIndicator size="large" color="#176B87" />
            <Text>Fetching Data</Text>
          </View>
        )}
      </View>
    </View>
  );
}
