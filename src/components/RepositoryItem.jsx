import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Number from "./Number";

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    itemContainer: {
      padding: 10,
      backgroundColor: "white",
      paddingBottom: 20,
    },
    tinyLogo: {
      borderRadius: 10,
      marginRight: 20,
      width: 50,
      height: 50,
    },

    darkText: {
      fontSize: 16,
      fontWeight: theme.fontWeights.bold,
      marginBottom: 5,
    },

    description: {
      color: "grey",
      flexShrink: 1,
      flexWrap: "wrap",
      marginBottom: 10,
    },

    language: {
      backgroundColor: theme.colors.primary,
      color: "white",
      padding: 5,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 5,
      marginBottom: 20,
    },

    subContainer: {
      flexDirection: "row",
    },

    detailsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    textContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      flex: 1,
    },
  });

  return (
    <View style={styles.itemContainer}>
      <View style={styles.subContainer}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.darkText}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Number num={item.stargazersCount} desc="Stars" />
        <Number num={item.forksCount} desc="Forks" />
        <Number num={item.reviewCount} desc="Reviews" />
        <Number num={item.ratingAverage} desc="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
