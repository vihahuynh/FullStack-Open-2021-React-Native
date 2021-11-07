import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  number: {
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
  },
});

const Number = ({ num, desc = "Stars" }) => {
  return (
    <View>
      <Text style={styles.number} testID={desc}>
        {num < 1000 ? num : `${(num / 1000).toFixed(1)}k`}
      </Text>
      <Text>{desc}</Text>
    </View>
  );
};

export default Number;
