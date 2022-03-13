import { StatusBar } from "expo-status-bar";
import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function PracticeTextInput() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g john"
        onChangeText={setName}
      />
      <Text>Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
