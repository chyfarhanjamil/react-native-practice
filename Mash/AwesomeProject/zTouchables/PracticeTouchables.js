import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

export default function PracticeTouchables() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {count > 0 ? <Text>Count: {count} </Text> : null}
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "tomato",
          alignItems: "center",
          width: 100,
          borderRadius: 5,
        }}
        onPress={() => setCount(count + 1)}
      >
        <Text>Press Here</Text>
      </Pressable>
    </View>
  );
}
