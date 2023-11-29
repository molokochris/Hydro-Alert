import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import { Entypo } from '@expo/vector-icons'; 

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState(null);
  

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  return (
    <View style={styles.MainContainer}>
      <Text
        style={{
          marginTop: "20%",
          fontWeight: "800",
          fontSize: 24,
          marginLeft: "8%",
        }}
      >
        Add area
      </Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
          <AntDesign name="search1" size={16} color="black" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search for area"
          placeholderTextColor="black"
          color="black"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View>

      <Entypo name="location-pin" size={40} color="#176B87"  alignSelf="center"
    alignItems= "center" marginTop={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: "12%",
    height: "8%",
    width: "85%",
    borderColor: "black",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color: "white",
  },
  iconContainer: {
    marginRight: 12,
  },
});

export default SearchBar;
