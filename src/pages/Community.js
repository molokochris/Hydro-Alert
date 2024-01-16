import {
  View,
  Text,
  StatusBar,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getData } from "../DB/SecureStorage";
import { TextInput } from "react-native-paper";
import { useRef } from "react";
import useScrollToBottom from "../CustomHooks.js/useScrollToBottom";
import generateUniqueColor from "../components/generateUniqueColor";
import calculateFontSize from "../components/AdjustFont";

export default function Community({ navigation }) {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageUpdates, setMessageUpdates] = useState([]);
  const [userId, setUserId] = useState("");

  // const credentials = firebase.auth();
  // fetch messages from firebase
  async function fetchID() {
    // const user = credentials.currentUser;
    try {
      const user = await getData("userInfo")
        .then((info) => JSON.parse(info))
        .catch((err) => console.log(err));
      console.log(user);
      if (user) {
        const fetchedUserId = user.user.uid;
        // console.log(fetchedUserId);
        setUserId(fetchedUserId);
      } else {
        console.error("Failed to retrieve user information");
      }
    } catch (error) {
      console.error("Error fetching user data or hashing password:", error);
    }
  }
  useEffect(() => {
    try {
      setIsLoading(true);
      fetchID();

      const database = firebase.database();

      const unsubscribe = database
        .ref("chats")
        .on("value", async (snapshot) => {
          const messages = snapshot ? snapshot.val() : {};
          const retrievedMessages = Object.values(messages || {});
          setMessageUpdates(retrievedMessages);
          console.log("messages: ", retrievedMessages);
        });

      // Cleanup function to unsubscribe from Firebase listener
      setIsLoading(false);
      return () => unsubscribe();
    } catch (error) {}
  }, [handleSendMessage]);

  const handleSendMessage = () => {
    const database = firebase.database();
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    try {
      setIsLoading(true);
      // const user = credentials.currentUser;

      if (userId) {
        database
          .ref("chats")
          .push({
            message,
            timestamp,
            senderId: userId,
          })
          .catch((error) => {
            console.error("Error sending message:", error);
          });

        setMessage("");
        setIsLoading(false);
      }

      // useScrollToBottom(scrollRef);
    } catch (error) {
      console.log(`something went wrong ${error}`);
    }
  };
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
          // backgroundColor: "#111111",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {/* Text bubble */}
          {messageUpdates.map((messageUpdate, index) => (
            <View
              key={index}
              style={{
                // width: "100%",
                maxHeight: 100,
                padding: 2,
                borderRadius: 8,
                marginBottom: 8,
                flexDirection:
                  userId == messageUpdate.senderId ? "row-reverse" : "row",
              }}
            >
              {userId == messageUpdate.senderId ? (
                <></>
              ) : (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 0.5,
                    borderColor: "gray",
                    borderRadius: 100,
                    // backgroundColor: generateUniqueColor(
                    //   messageUpdate.senderId
                    // ),
                    // marginRight: userId == messageUpdate.senderId ? 0 : 10,
                    // marginLeft: userId == messageUpdate.senderId ? 10 : 0,
                    marginRight: 10,
                  }}
                />
              )}
              <View
                style={{
                  // flex:  ? 1,
                  backgroundColor:
                    userId == messageUpdate.senderId
                      ? "rgba(153,156,230,.6)"
                      : "#111111",
                  // backgroundColor: "#686868",
                  padding: 5,
                  borderTopLeftRadius:
                    userId == messageUpdate.senderId ? 12 : 4,
                  borderBottomStartRadius: 12,
                  borderTopRightRadius:
                    userId == messageUpdate.senderId ? 4 : 12,
                  borderBottomEndRadius: 12,
                  width: "80%",
                }}
              >
                {/* <Text style={{ color: "whitesmoke" }}>
                {messageUpdate.senderId}
              </Text> */}
                <Text
                  style={{
                    // height: 60,
                    paddingHorizontal: 4,
                    color: "whitesmoke",
                    fontFamily: "Poppins-Regular",
                    fontSize: calculateFontSize(16),
                  }}
                >
                  {messageUpdate.message}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View
          style={{ height: 75, borderTopWidth: 0.5, borderColor: "yellow" }}
        >
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Type your message here..."
            multiline={true}
            maxLength={200}
            style={{
              flex: 1,
              borderRadius: 8,
              backgroundColor: "transparent",
              fontSize: 12,
              padding: 2,
            }}
          />
          <TouchableOpacity
            style={{
              paddingHorizontal: 25,
              paddingVertical: 8,
              backgroundColor: "#005BEA",
              alignSelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              position: "absolute",
              bottom: 0,
            }}
            disabled={!message}
            onPress={handleSendMessage}
          >
            {isLoading ? (
              <ActivityIndicator size={"small"} color="whitesmoke" />
            ) : (
              <Text style={{ color: "whitesmoke", fontWeight: "500" }}>
                Post
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <FontAwesome name="pencil-square" size={40} color="#BDBDBD" />
      </View> */}
    </View>
  );
}
