import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";
import ReviewForm from "./ReviewForm";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import { Switch, Route, Redirect } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});
const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/review">
          <ReviewForm />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/repository/:id">
          <SingleRepository />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};
export default Main;
