import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 18,
  },
  whiteText: {
    color: "white",
    fontWeight: "700",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>Repostories</Text>
    </View>
  );
};

export default AppBar;
