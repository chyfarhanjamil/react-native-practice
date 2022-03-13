import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Practice from "./Practice";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Practice /> */}
      <View
        style={{ height: 100, width: 100, backgroundColor: "dodgerblue" }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: "yellow" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "tomato" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "grey" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "black" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    // alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
