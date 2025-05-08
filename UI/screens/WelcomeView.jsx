import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 38 }}>Find The Most</Text>
      <Text style={{ fontSize: 30, color: "#0A8055FF" }}>
        Luxurious Furniture
      </Text>
      <View style={styles.searchBarContainer}>
        <Feather name="search" size={24} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="what are you looking for?"
          placeholderTextColor={"#000000"}
        />
        <Ionicons name="camera-outline" size={36} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  searchBarContainer: {
    height: 30,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textInputStyle: {
    marginHorizontal: 5,
    width: "300",
    backgroundColor: "#D7E2E8FF",
    height: 30,
    padding: 8,
    borderRadius: 8,
  },
});

export default WelcomeView;
