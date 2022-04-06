import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TextInput,
  Pressable,
  Button,
  Alert,
} from "react-native";

export default function PracticeAlert() {
  const [name, setName] = useState("");
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TextInput
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder="hello"
        onChangeText={setName}
      />
      <Button
        title="Add"
        onPress={() => {
          Alert.alert("Alert", `Your Name is: ${name}`, [{ text: "okay" }]);
        }}
      />
    </View>
  );
}
