import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

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
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(
      `Sign in with username: ${values.username} and password: ${values.password}`
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
