import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Item from "./Item";

export default function OrderHistory({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Item name={"Water Delivery"} date={"10 Feb 2023"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Jan 2022"} />
        <Item name={"Water Delivery"} date={"23 Oct 2021"} />
        <Item name={"Water Delivery"} date={"08 March 2021"} />
        <Item name={"Water Delivery"} date={"10 Jan 2021"} />
        <Item name={"Water Delivery"} date={"03 Nov 2020"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
        <Item name={"Water Delivery"} date={"08 Sep 2022"} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    flex: 1,
    padding: 10,
  },
});
