import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function PracticeFlatList() {
  const [people, setPeople] = useState([
    { name: "Abul", id: "1" },
    { name: "Kalam", id: "2" },
    { name: "Azad", id: "3" },
    { name: "Azadaa", id: "4" },
    { name: "Azadbb", id: "5" },
    { name: "Azadcc", id: "6" },
    { name: "Azadcdssd", id: "7" },
    { name: "Azadxvvbv", id: "8" },
    { name: "Azadbcb", id: "9" },
    { name: "Azadfjt", id: "10" },
    { name: "Azadfgnjgj", id: "11" },
    { name: "Azadkkhk", id: "12" },
  ]);

  const handlePress = (id) => {
    alert("The id removed is: " + id);
    setPeople((prev) => people.filter((element) => element.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
  text: {
    padding: 20,
    width: "100%",
    margin: 10,
    marginRight: 20,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
