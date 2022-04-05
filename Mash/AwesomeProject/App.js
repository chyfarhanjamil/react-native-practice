import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LearnState from './z2nd/LearnState';
// import First from './z1st/First';

export default function App() {
  return (
    <View style={styles.container}>
      <LearnState/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
