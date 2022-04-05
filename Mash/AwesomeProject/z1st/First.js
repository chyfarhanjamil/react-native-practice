import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
// import { Linking } from "react-native-web";

export default function First() {
  return (
    <View>
      <Text>Open my LinkedIn profile!</Text>
      <Button
        title="Press Me"
        onPress={() => {
          Linking.openURL("https://www.linkedin.com/feed/");
        }}
      />
    </View>
  );
}
