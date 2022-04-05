import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function LearnState() {
  const [name, setName] = useState("Farhan");
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const [obj, setObj] = useState({ num: 6, title: "Hello World" });
  const onPress1 = () => {
    setName("Jamil");
  };
  const onPress2 = () => {
    setObj({ ...obj, num: "2" });
  };
  return (
    <View>
      <Text>My Name is {name}</Text>
      <Text style={{ margin: 20 }}>
        The number is: {obj.num} and title: {obj.title}
      </Text>
      <Button title="Press Me" onPress={onPress1} />
      <Button title="Press Me 2" onPress={onPress2} />
      <Text>{number}</Text>
      <Button
        title="Add"
        onPress={() => {
          setNumber(number + 5);
          setCounter(counter + 1);
        }}
      />
      <Text>Clicked {counter} times</Text>
    </View>
  );
}
