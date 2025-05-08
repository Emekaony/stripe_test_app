import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dummy from "./components/dummy";

export default function App() {
  return (
    <View style={styles.container}>
      <Dummy />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10704AFF",
  },
  openTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
