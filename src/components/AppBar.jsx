import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
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
    marginRight: 15,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.whiteText}>Repostories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.whiteText}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
