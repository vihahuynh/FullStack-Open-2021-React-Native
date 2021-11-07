import React from "react";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const result = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  if (result.loading) return <Text>loading...</Text>;
  const { repository } = result.data || [];
  return { repository };
};

export default useRepository;
