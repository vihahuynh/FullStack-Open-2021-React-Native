import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import { useQuery } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const result = useQuery(GET_AUTHORIZED_USER);
  if (result.loading) return <Text>loading...</Text>;
  const authorizedUser = result?.data?.authorizedUser;

  const handleSignout = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.whiteText}>Repostories</Text>
        </Link>
        {authorizedUser && (
          <Link to="/review">
            <Text style={styles.whiteText}>Create a review</Text>
          </Link>
        )}
        {authorizedUser ? (
          <Pressable onPress={handleSignout}>
            <Text style={styles.whiteText}>Sign Out</Text>
          </Pressable>
        ) : (
          <Link to="/signin">
            <Text style={styles.whiteText}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
