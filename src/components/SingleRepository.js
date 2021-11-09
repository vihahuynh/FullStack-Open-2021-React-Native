import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  reviewContainer: {
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
  },

  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10,
  },

  rating: {
    color: theme.colors.primary,
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
    paddingTop: 11,
  },

  username: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },

  date: {
    color: "grey",
  },

  detailContainer: {
    padding: 10,
    flexShrink: 1,
  },
});

const RepositoryInfo = ({ repository }) => {
  if (!repository) return null;
  return <RepositoryItem item={repository} showLink={true} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>
          {format(new Date(review.createdAt), "yyyy.MM.dd")}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (!repository) return <Text>loading...</Text>;

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;
