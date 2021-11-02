import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    fontSize: theme.fontSizes.nav,
    paddingLeft: 10,
    paddingBottom: 18,
  },
  whiteText: {
    fontFamily: theme.fontFamily,
    color: "white",
    fontWeight: theme.fontWeights.bold,
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
