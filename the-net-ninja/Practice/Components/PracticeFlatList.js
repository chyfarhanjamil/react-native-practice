import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function PracticeFlatList() {
  const [people, setPeople] = useState([
    { name: "Abul", id: "1" },
    { name: "Kalam", id: "2" },
    { name: "Azad", id: "3" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    paddingTop: 20,
  },
});
