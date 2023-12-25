import {
  View,
  Text,
  Button,
  StatusBar,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Dimensions,
  PixelRatio,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialBottomTabs } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Profile from "./Profile";
import Settings from "./Settings";
import HireForm from "./HireForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Auth, firestore } from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";
import { ScrollView } from "react-native";

export default function Home({ navigation, route }) {
  const [sidemenu, setSideMenu] = useState(false);
  const [isUpdates, setIsUpdates] = useState(false);
  const [updates, setUpdates] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const { width } = Dimensions.get("window");
  const fontScale = 0.85;

  const calculateFontSize = (baseFont) => {
    const adjustFontSize = PixelRatio.roundToNearestPixel(
      (baseFont * width * fontScale) / 360
    );

    return adjustFontSize;
  };

  const location = route.params.location;
  const userID = route.params.userID;

  // Fetch Data from Database
  useEffect(() => {
    setIsUpdates(false);

    const fetchUpdates = async () => {
      console.log(userID);
      try {
        const updatesRef = firestore.collection(`${location}`);
        const snapshot = await updatesRef.get();

        const userProfDoc = await firestore
          .collection("users")
          // .doc(`${userID}`)
          .doc("ZoJTd7sHYfPzUnVPI1DcxAJSBIn2")
          .get();

        const userProfData = userProfDoc.exists ? userProfDoc.data() : {}; // Provide an empty object if the document doesn't exist

        const updatesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUpdates(updatesData);

        console.log("Updates Data: ", updatesData);
        console.log("User Profile: ", userProfData);

        setIsUpdates(true);
      } catch (error) {
        console.error("Error fetching updates:", error.message);
      }
    };

    fetchUpdates();
  }, [location, userID]);
  // console.log(route.params.location);
  return isUpdates ? (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#005BEA", "#000000", "#000000"]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // backgroundColor="#111111"
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: "row",
          // backgroundColor: "yellow",
          paddingTop: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => setSideMenu(true)}
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "rbga(0,0,0,0.5)",
            // borderWidth: 1,
            // borderColor: "whitesmoke",
            // marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Entypo name="menu" size={25} color="whitesmoke" />
        </TouchableOpacity>
        <Pressable
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "rbga(0,0,0,0.5)",
            borderWidth: 1,
            borderColor: "whitesmoke",
            marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate("Store")}
        >
          {/* <Text>FF</Text> */}
          <FontAwesome5 name="store" size={16} color="whitesmoke" />
          {/* <Button title="Store"  /> */}
        </Pressable>
      </View>
      <View style={{ flex: 9, alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 25,
          }}
        >
          {/* <Text style={{ fontSize: 14, fontWeight: "normal", color: "white" }}>
            Location:
          </Text> */}
          <Ionicons name="ios-location" size={16} color="tomato" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "whitesmoke",
              marginBottom: "2%",
              marginTop: 5,
              fontFamily: "Poppins-Regular",
            }}
          >
            {/* Polokwane, Mankweng, Unit-E */}
            {updates[0].location}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#BDBDBD",
              fontFamily: "Poppins-Regular",
            }}
          >
            Next Delivery
          </Text>
          <Text
            style={{
              // fontSize: 64,
              fontSize: calculateFontSize(60),
              fontWeight: "bold",
              color: "whitesmoke",
              fontFamily: "Poppins-Regular",
            }}
          >
            {/* Mon */}
            {updates[0].dayOfWeek}
          </Text>
          <Text
            style={{
              fontSize: calculateFontSize(60),
              fontWeight: "bold",
              color: "whitesmoke",
              fontFamily: "Poppins-Regular",
            }}
          >
            13 Oct 23
          </Text>
          <Text
            style={{
              fontSize: calculateFontSize(60),
              fontWeight: "bold",
              color: "whitesmoke",
              fontFamily: "Poppins-Regular",
            }}
          >
            {/* 14:50 */}
            {updates[0].time}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 5,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            width: "80%",
            // height: 100,
            backgroundColor: "#90C418",
            borderRadius: 8,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: calculateFontSize(26),
              color: "whitesmoke",
              fontFamily: "Poppins-Regular",
              marginBottom: "10%",
            }}
          >
            Emergency Alert
          </Text>
          <Text style={{ color: "#BDBDBD", fontFamily: "Poppins-Regular" }}>
            20 sec ago
          </Text>
        </Pressable>
      </View>
      {/* <Text>Home</Text> */}
      {sidemenu && (
        <View
          style={{
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            position: "absolute",
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,0.4)",
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "80%",
              backgroundColor: "black",
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // borderBottomWidth: 1,
                // borderBottomColor: "#BDBDBD",
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "whitesmoke",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              ></View>
              <View>
                <Text style={{ color: "#BDBDBD" }}>molokochrisp742@gmail</Text>
              </View>
            </View>
            <View style={{ flex: 3, paddingTop: 20 }}>
              <Pressable
                onPress={() => navigation.navigate("User Profile")}
                style={{
                  borderWidth: 1,
                  borderColor: "whitesmoke",
                  marginBottom: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "whitesmoke" }}>Profile</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Hire")}
                style={{
                  borderWidth: 1,
                  borderColor: "whitesmoke",
                  marginBottom: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
              >
                <Text title="Hire Form" style={{ color: "whitesmoke" }}>
                  Hire Form
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Orders")}
                style={{
                  borderWidth: 1,
                  borderColor: "whitesmoke",
                  marginBottom: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
              >
                <Text title="Orders" style={{ color: "whitesmoke" }}>
                  Orders
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Settings")}
                style={{
                  borderWidth: 1,
                  borderColor: "whitesmoke",
                  marginBottom: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
              >
                <Text title="Settings" style={{ color: "whitesmoke" }}>
                  Settings
                </Text>
              </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              {/* <Entypo
                style={{ alignSelf: "flex-end" }}
                color="whitesmoke"
                name="cross"
                size={25}
              /> */}
              <TouchableOpacity
                style={{
                  backgroundColor: "whitesmoke",
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setSideMenu(false)}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {/* // Modal */}
      {/* <View style={{ flex: 1, backgroundColor: "green", zIndex: 1,ab }}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("modal closed");
          setModalVisible(!modalVisible);
        }}
      >
        <LinearGradient
          colors={[
            "#90C418",
            "#018553",
            "#111111",
            "#000000",
            "#111111",
            "#018553",
            "#90C418",
          ]}
          style={{
            alignSelf: "center",
            flex: 1,
            // height: 500,
            // justifyContent: "center",
            alignItems: "center",
            padding: 10,
            // backgroundColor: "whitesmoke",
          }}
        >
          <Pressable
            style={{
              alignSelf: "flex-end",
              borderRadius: 100,
              height: 35,
              width: 35,
              borderColor: "whitesmoke",
              borderWidth: 1,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons
              name="window-close"
              size={26}
              color="whitesmoke"
            />
          </Pressable>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={true}
            indicatorStyle="whitesmoke"
          >
            <View style={{ flex: 1, alignItems: "center", paddingBottom: 10 }}>
              <Text
                style={{
                  color: "whitesmoke",
                  fontFamily: "Poppins-Bold",
                  marginBottom: 20,
                }}
              >
                Emergency Update:
              </Text>
              <Text style={{ color: "whitesmoke", marginBottom: 25 }}>
                Water Delivery Delay Attention Residents of Tsisintsi
              </Text>
              <Text style={{ color: "whitesmoke", marginBottom: 40 }}>
                Message: {updates[1] ? updates[1].message : "no message"}
              </Text>
              <Text style={{ color: "whitesmoke", textAlign: "center" }}>
                This is an important update regarding your scheduled water
                delivery. We understand the critical importance of access to
                clean and safe water, especially during these challenging times.
                Unfortunately, due to [brief explanation of reason for delay -
                e.g., unforeseen repairs, equipment malfunction, extreme
                weather], there will be a delay in your scheduled water
                deliveries. What you can expect: Delivery delay: Deliveries will
                be delayed by [approximate timeframe of delay - e.g., 2-4 hours,
                until tomorrow morning]. Updated timing: We will provide updated
                individual delivery times as soon as we have them. Please keep
                an eye on your phones for SMS notifications or check our
                website/app for the latest information. Emergency water: If you
                are facing an immediate water shortage, please do not hesitate
                to contact us at [phone number] or [alternative contact
                information]. We have emergency water reserves available and
                will prioritize delivery to those in critical need. We apologize
                for any inconvenience this may cause. We are working diligently
                to resolve the situation and resume regular deliveries as soon
                as possible. Your water and well-being are our top priorities.
                Please stay informed: Follow us on social media ([social media
                links]) for real-time updates. Visit our website/app
                ([website/app link]) for detailed information and resources.
                Thank you for your understanding and cooperation. Sincerely, The
                [Municipality Name] Water Delivery Team
              </Text>
            </View>
          </ScrollView>
        </LinearGradient>
      </Modal>
      {/* </View> */}
    </LinearGradient>
  ) : (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#005BEA", "#000000", "#000000"]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // backgroundColor="#111111"
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: "row",
          // backgroundColor: "red",
          paddingTop: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => setSideMenu(true)}
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "rbga(0,0,0,0.5)",
            // borderWidth: 1,
            // borderColor: "whitesmoke",
            // marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Entypo name="menu" size={25} color="whitesmoke" />
        </TouchableOpacity>
        <Pressable
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "rbga(0,0,0,0.5)",
            borderWidth: 1,
            borderColor: "whitesmoke",
            marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate("Store")}
        >
          {/* <Text>FF</Text> */}
          <FontAwesome5 name="store" size={16} color="whitesmoke" />
          {/* <Button title="Store"  /> */}
        </Pressable>
      </View>
      <View style={{ flex: 9, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#005BEA" />
      </View>
      <View
        style={{
          flex: 5,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "#90C418",
            borderRadius: 8,
          }}
        ></Pressable>
      </View>
    </LinearGradient>
  );
}
