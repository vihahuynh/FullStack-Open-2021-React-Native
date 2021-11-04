import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

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
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [authorize] = useSignIn();

  const onSubmit = async (values) => {
    try {
      const accessToken = await authorize({
        username: values.username,
        password: values.password,
      });
      console.log(
        `Signed in with username: ${values.username} and password: ${values.password}`
      );
      console.log("accessToken: ", accessToken);
    } catch (error) {
      console.error(error);
    }
  };

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

export default SignIn;
