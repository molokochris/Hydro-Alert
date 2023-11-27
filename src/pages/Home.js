import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Home() {
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
            style={{
              width: "50%",
              textAlign: "center",
              backgroundColor: "#176B87",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "whitesmoke", fontFamily: "Poppins-Regular" }}
            >
              Updates
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "50%",
              textAlign: "center",
              //   backgroundColor: "#176B87",
              borderRadius: 48,
              flex: 1,
              height: "75%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon name="truck" type="fontisto" color="#176B87" />
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
          paddingHorizontal: 18,
        }}
      >
        <ScrollView
          style={{ borderRadius: 48 }}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >
          <Pressable
            onPress={() => console.log("Pressed!!")}
            style={{
              width: "100%",
              height: 125,
              borderRadius: 35,
              paddingVertical: 10,
              paddingHorizontal: 14,
              backgroundColor: "tomato",
              flexDirection: "column",
              marginBottom: 10,
              elevation: 18,
              shadowColor: "#D9D9D9",
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
          </Pressable>

          <View
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
          </View>
          <View
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
          </View>
          <View
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
          </View>
          <View
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
