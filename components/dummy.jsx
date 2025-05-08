import { StyleSheet, Text, View } from "react-native";

export default DeummyComponents = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}>
        <Text style={{ color: "white" }}>hello</Text>
        <Text style={{ color: "white" }}>hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // let mainView take up all the space!
  mainView: {
    flex: 1,
  },
  viewOne: {
    flex: 0.5,
    backgroundColor: "white",
  },
  viewTwo: {
    flex: 0.5,
    backgroundColor: "black",
  },
});
