import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PracticeFlatList from "./Components/PracticeFlatList";
import PracticeTextInput from "./Components/PracticeTextInput";

export default function App() {
  return (
    <View>
      <PracticeFlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
