import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

export default function PracticeSectionList() {
  const [refresh, setRefresh] = useState(false);
  const [Sections, setSections] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2"],
    },
  ]);

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <View>
          <Text style={{ fontSize: 25, color: "black" }}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.view1}>
          <Text style={{ fontSize: 35, color: "white" }}>{section.title}</Text>
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
