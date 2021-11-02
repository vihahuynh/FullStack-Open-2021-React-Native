import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    margin: 15,
    marginTop: 0,
    fontFamily: theme.fontFamily,
  },

  inputStyle: {
    color: "black",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
  },

  inputError: {
    borderColor: "red",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[styles.inputStyle, showError && styles.inputError]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
