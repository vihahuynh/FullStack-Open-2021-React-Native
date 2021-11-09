import { isNonEmptyArray } from "@apollo/client/utilities";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  errorMessage: {
    backgroundColor: "#ff9999",
    color: "red",
    margin: 10,
    marginBottom: 1,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 1,
    fontWeight: theme.fontWeights.bold,
  },

  errorContainer: {
    backgroundColor: "white",
  },
});

const Error = ({ message }) => {
  if (!message) return null;
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

export default Error;
