import React, { useState } from "react";
import { StyleSheet, Text, View, RefreshControl, FlatList } from "react-native";

export default function PracticeFlatList() {
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([
    { name: "A" },
    { name: "d" },
    { name: "g" },
    { name: "a" },
    { name: "e" },
    { name: "q" },
    { name: "w" },
    { name: "u" },
    { name: "w" },
    { name: "u" },
    { name: "i" },
    { name: "bvg" },
    { name: "ggf" },
    { name: "dd" },
  ]);

  const handleRefresh = () => {
    setRefresh(true);
    setItems([...items, { name: "Refreshed" }]);
    setRefresh(false);
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
      }
      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.view1}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
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
