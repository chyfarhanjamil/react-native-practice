import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <Text>Screen Home</Text>
      <Button
        title="To Contact"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
function Contact({ navigation }) {
  return (
    <View style={styles.body}>
      <Text>Screen Contact</Text>
      <Button
        title="To Help"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
function Help({ navigation }) {
  return (
    <View style={styles.body}>
      <Text>Screen Help</Text>
    </View>
  );
}

export default function PracticeStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
