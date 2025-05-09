import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { themes, themse } from "../constants/theme";

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 38, color: themes.colors.black }}>
        Find The Most
      </Text>
      <Text style={{ fontSize: 30, color: themes.colors.primary }}>
        Luxurious Furniture
      </Text>
      <View style={styles.searchBarContainer}>
        <Feather name="search" size={24} style={styles.searchIcon} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="what are you looking for?"
          placeholderTextColor={"#000000"}
        />
        <View style={styles.searchCameraBtn}>
          <Ionicons
            name="camera-outline"
            size={30}
            color={themes.colors.offWhite}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  searchIcon: {
    color: themes.colors.gray,
  },
  searchBarContainer: {
    height: 40,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: themes.colors.secondary,
    borderRadius: themes.sizes.medium,
  },
  textInputStyle: {
    marginHorizontal: themes.sizes.small,
    width: "280",
    backgroundColor: themes.colors.secondary,
    height: 40,
    padding: 8,
    borderRadius: themes.sizes.medium,
  },
  searchCameraBtn: {
    padding: 3,
    backgroundColor: themes.colors.primary,
    justifyContent: "center",
    borderRadius: 8,
    width: 40,
    alignItems: "center",
  },
});

export default WelcomeComponent;
