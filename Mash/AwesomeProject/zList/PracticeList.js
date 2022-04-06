import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  RefreshControl,
  ScrollView,
} from "react-native";

export default function PracticeList() {
  const [items, setItems] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "d" },
    { id: 3, name: "g" },
    { id: 4, name: "a" },
    { id: 14, name: "e" },
    { id: 5, name: "q" },
    { id: 6, name: "w" },
    { id: 7, name: "u" },
    { id: 8, name: "w" },
    { id: 9, name: "w" },
    { id: 10, name: "w" },
    { id: 11, name: "w" },
    { id: 12, name: "w" },
    { id: 13, name: "w" },
  ]);
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(true);
    setItems([...items, { id: 82, name: "Refreshed Name" }]);
    setRefresh(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} 
        onRefresh={handleRefresh} />
      }
    >
      {items.map((item) => (
        <View style={styles.view1} key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
      <Button
        title="Add"
        onPress={() => {
          setItems([...items, { id: 16, name: "ff" }]);
        }}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view1: {
    backgroundColor: "dodgerblue",
    margin: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
