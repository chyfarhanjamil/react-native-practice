import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const Practice = () => {
  return (
    <View>
      <Button
        title="click me"
        color="orange"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </View>
  );
};

export default Practice;
