import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function PracticeFlexbox2() {
  return (
    <View style={styles.body}>
      <View style={styles.topRow}>
        <View style={styles.view1}>1</View>
        <View style={styles.view2}>2</View>
        <View style={styles.view3}>3</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    //flexDirection: "row",
  },
  topRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  view1: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  view2: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  view3: {
    flex: 3,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
