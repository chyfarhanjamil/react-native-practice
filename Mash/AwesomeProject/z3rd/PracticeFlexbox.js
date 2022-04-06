import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function PracticeFlexbox() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row" }}>
        <View style={{ backgroundColor: "tomato", flex: 1 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
        <View style={{ backgroundColor: "violet", flex: 1 }} />
      </View>
      <View
        style={{ backgroundColor: "white", flex: 1, flexDirection: "column" }}
      >
        <View style={{ backgroundColor: "green", flex: 1 }} />
        <View style={{ backgroundColor: "yellow", flex: 1 }} />
        <View style={{ backgroundColor: "violet", flex: 1 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
