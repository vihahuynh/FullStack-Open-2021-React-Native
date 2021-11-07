import React from "react";
import { useParams } from "react-router";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  console.log(repository);
  if (!repository) return null;
  return <RepositoryItem item={repository} showLink={true} />;
};

export default Repository;
