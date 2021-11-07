import React from "react";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (result.loading) return <Text>loading...</Text>;
  const { repositories } = result.data || [];
  return { repositories };
};

export default useRepositories;
