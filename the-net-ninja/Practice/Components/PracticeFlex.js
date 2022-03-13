import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PracticeFlex() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          height: 100,
          //   width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "coral",
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}
