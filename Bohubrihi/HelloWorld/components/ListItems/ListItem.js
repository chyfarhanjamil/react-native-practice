import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

const ListItem = ({ place }) => {
  return (
    <TouchableHighlight
      onLongPress={() => {
        alert(place);
      }}
    >
      <View style={styles.list}>
        <Text>{place}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    margin: 5,
    padding: 12,
    backgroundColor: "#eee",
  },
});

export default ListItem;
