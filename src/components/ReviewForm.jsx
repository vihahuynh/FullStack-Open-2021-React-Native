import React, { useState } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Error from "./Error";
import { useHistory } from "react-router-native";
import useReview from "../hooks/useReview";
import theme from "../theme";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min("0", "Rating must be between 0 and 100")
    .max("100", "Rating must be between 0 and 100"),
});

const styles = StyleSheet.create({
  reviewContainer: {
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
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.reviewContainer}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable testID="submitButton" style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit, message = "" }) => {
  return (
    <View>
      <Error message={message} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const Review = () => {
  const [review] = useReview();
  const history = useHistory();
  const [message, setMessage] = useState("");

  const onSubmit = async (values) => {
    try {
      const repositoryId = await review({
        ownerName: values.ownerName,
        repositoryName: values.repositoryName,
        rating: Number(values.rating),
        text: values.text,
      });

      history.push(`/repository/${repositoryId}`);
    } catch (error) {
      setMessage(error.message);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} message={message} />;
};

export default Review;
