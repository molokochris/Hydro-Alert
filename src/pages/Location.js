// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   Alert,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { Button } from "@rneui/base";

// const SearchBar = ({ navigation }) => {
//   // const
//   const [searchText, setSearchText] = useState("");
//   const [location, setLocation] = useState(null);

//   const handleSearch = () => {
//     console.log("Searching for:", searchText);
//   };

//   return (
//     <View style={styles.MainContainer}>
//       <Text
//         style={{
//           marginTop: "20%",
//           fontWeight: "800",
//           fontSize: 24,
//           fontFamily: "Poppins-Regular",
//           alignSelf: "center",
//         }}
//       >
//         Choose Your Location
//       </Text>
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
//           <AntDesign name="search1" size={16} color="black" />
//         </TouchableOpacity>

//         <TextInput
//           style={styles.input}
//           placeholder="Search for area"
//           placeholderTextColor="black"
//           color="black"
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//         />
//       </View>

//       <Entypo
//         name="location-pin"
//         size={40}
//         color="#176B87"
//         alignSelf="center"
//         alignItems="center"
//         marginTop={50}
//       />
//       <Button title="next" onPress={() => navigation.navigate("Boyne")} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   container: {
//     flexDirection: "row",
//     alignSelf: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginTop: "12%",
//     height: "8%",
//     width: "85%",
//     borderColor: "black",
//     borderWidth: 1,
//   },
//   input: {
//     flex: 1,
//     color: "white",
//   },
//   iconContainer: {
//     marginRight: 12,
//   },
// });

// export default SearchBar;
import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Location({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 24,
            marginBottom: 20,
            fontFamily: "Poppins-Black",
          }}
        >
          Please Choose Your Location:
        </Text>
        <TouchableOpacity
          style={{
            width: "98%",
            height: 100,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#C3AE2E",
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Home", { location: "Boyne" })}
        >
          <Text style={{ color: "whitesmoke", fontSize: 18 }}>Boyne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "98%",
            height: 100,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#C3AE2E",
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Home", { location: "Makanye" })}
        >
          <Text style={{ color: "whitesmoke", fontSize: 18 }}>Makanye</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "98%",
            height: 100,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#C3AE2E",
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Home", { location: "Ga-Molepo" })}
        >
          <Text style={{ color: "whitesmoke", fontSize: 18 }}>Ga-Molepo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "98%",
            height: 100,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#C3AE2E",
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Home", { location: "Iraq" })}
        >
          <Text style={{ color: "whitesmoke", fontSize: 18 }}>Iraq</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "98%",
            height: 100,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#C3AE2E",
            marginBottom: 10,
          }}
          onPress={() =>
            navigation.navigate("Home", { location: "Ga-Mothiba" })
          }
        >
          <Text style={{ color: "whitesmoke", fontSize: 18 }}>Ga-Mothiba</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
