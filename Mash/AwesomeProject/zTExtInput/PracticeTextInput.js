import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TextInput,
} from "react-native";

export default function PracticeTextInput() {
  const [data, setData] = useState(["Hello World", "Hello Again"]);
  return (
    <View style={{ paddingTop: 20 }}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: "dodgerblue", margin: 5, width: "50%" }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
      <TextInput
        multiline
        style={styles.input1}
        placeholder="hello"
        onChangeText={setData}
        maxLength={10}
        secureTextEntry
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input1: {
    borderBottomWidth: 1,
    width: 200,
    textAlign: "center",
    fontSize: 20,
  },
});
