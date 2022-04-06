import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

export default function PracticeImage({ name }) {
  return (
    <ImageBackground
      source={{ uri: "https://reactjs.org/logo-og.png" }}
      style={{ flex: 1 }}
    >
      <Text style={{ color: "white" }}>{name}</Text>
      <Image
        source={require("../assets/favicon.png")}
        style={{ height: 100, width: 100 }}
      />
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ height: 100, width: 100 }}
      />
    </ImageBackground>
  );
}
