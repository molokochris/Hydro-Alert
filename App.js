import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/pages/Onboarding";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import Main from "./src/pages/Main";
import Store from "./src/pages/Store";
import Profile from "./src/pages/Profile";
import HireForm from "./src/pages/HireForm";
import Settings from "./src/pages/Settings";
import Orders from "./src/pages/Orders";
import Location from "./src/pages/Location";
import { createContext, useContext, useEffect, useState } from "react";
import ProfileInfo from "./src/pages/ProfileInfo";
import * as SecureStore from "expo-secure-store";

import { saveData, getData, deleteData } from "./src/DB/SecureStorage";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   const saveAndRetrieveData = async () => {
  //     try {
  //       const savedData = await getData("userID");
  //       if (savedData) {
  //         setIsAuth(true);
  //       } else {
  //         setIsAuth(false);
  //       }
  //       // await deleteData("userID");
  //       console.log(savedData); // Should log "Mounted"

  //       // Utilize savedData in your component as needed
  //     } catch (error) {
  //       // Handle any errors that occur during saving or retrieval
  //       console.error("Error saving or retrieving data:", error);
  //     }
  //   };

  //   saveAndRetrieveData();
  // }, []);

  useEffect(() => {
    const saveAndRetrieveData = async () => {
      try {
        const savedData = await getData("userID");
        setIsAuth(!!savedData); // Update isAuth directly based on saved data
      } catch (error) {
        console.error("Error saving or retrieving data:", error);
      }
    };

    saveAndRetrieveData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
