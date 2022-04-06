import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LearnState from "./z2nd/LearnState";
import PracticeFlexbox from "./z3rd/PracticeFlexbox";
import PracticeFlexbox2 from "./z3rd/PracticeFlexbox2";
import FlexDirection from "./z3rd/FlexDirection";
// import First from './z1st/First';

export default function App() {
  return <PracticeFlexbox2 />;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // flexDirection: "column",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
