import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import ListItem from "./components/ListItems/ListItem";

const App = () => {
  const [txt, setTxt] = useState(null);
  const [placeList, setPlaceList] = useState([]);

  return (
    <View style={{ margin: 20 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="I am placeholder"
          onChangeText={setTxt}
          value={txt}
        />
        <Button title="Add" onPress={() => setPlaceList([...placeList, txt])} />
      </View>
      <ScrollView>
        {placeList.map((place, index) => {
          if (place !== "") return <ListItem key={index} place={place} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    //width: "80%",
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default App;
