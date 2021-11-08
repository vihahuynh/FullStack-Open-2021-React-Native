import React from "react";
import { FlatList, Pressable } from "react-native";
import { useHistory } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/repository/${id}`);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleClick(item.id)}>
        <RepositoryItem testID="repoItem" item={item} />
      </Pressable>
    );
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
