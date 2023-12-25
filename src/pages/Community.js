import {
  View,
  Text,
  StatusBar,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Community() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        paddingHorizontal: 4,
        paddingTop: 25,
      }}
    >
      <StatusBar
        barStyle="light-content"
        // backgroundColor="#111111"
        translucent={true}
      />
      <View style={{ alignItems: "center", paddingVertical: 15 }}>
        <Text style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}>
          Community Forum
        </Text>
      </View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: "gray",
          borderRadius: 8,
          flex: 1,
          // marginBottom: 10,
          padding: 6,
          backgroundColor: "#111111",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {/* Text bubble */}

          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              maxHeight: 100,
              backgroundColor: "#686868",
              padding: 2,
              // flexDirection: "column",
              // flexWrap: "wrap",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginRight: 2,
                }}
              ></View>
              <Text style={{ color: "whitesmoke" }}>@username</Text>
            </View>
            <Text
              style={{ height: 60, paddingHorizontal: 4, color: "whitesmoke" }}
            >
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </Text>
          </View>
        </ScrollView>
        <View style={{ height: 75 }}>
          <Text
            style={{
              color: "gray",
              flex: 1,
              paddingHorizontal: 4,
              paddingVertical: 8,
            }}
          >
            type your message here..
          </Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 25,
              paddingVertical: 8,
              backgroundColor: "#005BEA",
              alignSelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "whitesmoke", fontWeight: "500" }}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <FontAwesome name="pencil-square" size={40} color="#BDBDBD" />
      </View> */}
    </View>
  );
}
