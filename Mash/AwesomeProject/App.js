import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LearnState from "./z2nd/LearnState";
import PracticeFlexbox from "./z3rd/PracticeFlexbox";
import PracticeFlexbox2 from "./z3rd/PracticeFlexbox2";
import FlexDirection from "./z3rd/FlexDirection";
import PracticeList from "./zList/PracticeList";
import PracticeFlatList from "./zFlatList/PracticeFlatList";
import PracticeSectionList from "./zSectionList/PracticeSectionList";
import PracticeTextInput from "./zTExtInput/PracticeTextInput";
import PracticeTouchables from "./zTouchables/PracticeTouchables";
import PracticeAlert from "./zAlert/PracticeAlert";
// import First from './z1st/First';

export default function App() {
  return (
    <View style={styles.container}>
      <PracticeAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
