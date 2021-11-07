import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";
import theme from "../theme";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  signinContainer: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 10,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 10,
    marginTop: 5,
    textAlign: "center",
    borderRadius: 5,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.signinContainer}>
      <FormikTextInput
        testID="usernameField"
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        testID="passwordField"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable testID="submitButton" style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [authorize] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const accessToken = await authorize({
        username: values.username,
        password: values.password,
      });
      authStorage.setAccessToken(accessToken);
      apolloClient.resetStore();
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
