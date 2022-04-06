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

{/* <View>
      <View style={styles.topView}>
        <View style={styles.view1}>1</View>
        <View style={styles.view2}>2</View>
        <View style={styles.view3}>3</View>
      </View>
      <View style={styles.midView}>
        <View style={styles.view4}>4</View>
      </View>

      <View style={styles.midView}>
        <View style={styles.view5}>5</View>
      </View>

      <View style={styles.view6}>6</View>
      <View style={styles.view7}>7</View>
    </View> */}
