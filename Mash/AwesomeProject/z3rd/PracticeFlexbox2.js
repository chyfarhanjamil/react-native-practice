import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function PracticeFlexbox2() {
  return (
    <View style={styles.body}>
      <View style={styles.topRow}>
        <View style={styles.view1}>
          <Text style={{ margin: 20 }}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={{ margin: 20 }}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={{ margin: 20 }}>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={{ margin: 20 }}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={{ margin: 20 }}>5</Text>
      </View>
      <View style={styles.bottomrow}>
        <View style={styles.view6}>
          <Text style={{ margin: 20 }}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={{ margin: 20 }}>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    //flexDirection: "row",
  },
  topRow: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "flex-start",
    flexDirection: "row",
  },
  bottomrow: {
    flex: 4,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
  },
  view1: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  view2: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  view3: {
    flex: 3,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  view4: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  view5: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  view6: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  view7: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  txt: {
    margin: 20,
  },
});
