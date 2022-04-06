import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function FlexDirection() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row-reverse",
      }}
    >
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "violet", width: 100, height: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
