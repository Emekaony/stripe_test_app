import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import WelcomeView from "./UI/screens/WelcomeView";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <WelcomeView />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
